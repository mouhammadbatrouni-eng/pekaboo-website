import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.email("Please enter a valid email address.").trim(),
  nurseryName: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more — at least 10 characters.").max(2000),
  // Honeypot: real visitors never fill this in (it's hidden via CSS). Bots often do.
  company: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;
