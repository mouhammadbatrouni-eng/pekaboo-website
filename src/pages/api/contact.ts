import type { APIRoute } from "astro";
import { contactSchema, type ContactFieldErrors } from "../../lib/validations/contact";

export const prerender = false;

/** True when the client submitted via fetch() and expects a JSON response. */
function wantsJson(request: Request) {
  return request.headers.get("accept")?.includes("application/json") ?? false;
}

async function sendNotificationEmail(data: { name: string; email: string; nurseryName?: string; message: string }) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    // Not configured yet (e.g. local dev) — log instead of failing the request,
    // so the form still works end-to-end before email delivery is wired up.
    console.info("[contact] RESEND_API_KEY/CONTACT_TO_EMAIL not set — skipping email send.", data);
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Peekaboo Website <noreply@peek-a-boo.app>",
      to,
      reply_to: data.email,
      subject: `New demo request from ${data.name}${data.nurseryName ? ` (${data.nurseryName})` : ""}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nNursery: ${data.nurseryName || "—"}\n\n${data.message}`,
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend API error:", response.status, await response.text());
    throw new Error("Failed to send notification email.");
  }
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const raw = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    nurseryName: String(formData.get("nurseryName") || ""),
    message: String(formData.get("message") || ""),
    company: String(formData.get("company") || ""),
  };

  const parsed = contactSchema.safeParse(raw);
  const asJson = wantsJson(request);

  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFieldErrors;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }

    if (asJson) {
      return new Response(JSON.stringify({ success: false, errors: fieldErrors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return redirect("/contact?error=1");
  }

  // Honeypot tripped — pretend success so bots don't learn anything, but skip sending.
  if (parsed.data.company) {
    if (asJson) return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    return redirect("/contact?success=1");
  }

  try {
    await sendNotificationEmail(parsed.data);
  } catch (error) {
    console.error("[contact] Failed to process submission:", error);
    if (asJson) {
      return new Response(JSON.stringify({ success: false, errors: {}, serverError: true }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
    return redirect("/contact?error=1");
  }

  if (asJson) {
    return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
  }
  return redirect("/contact?success=1");
};
