import type { Faq, HomePage, Page } from "./types";
import { CTA, SITE } from "./site";
import { FAQS } from "./marketing";

/**
 * Bundled content used whenever Sanity has nothing to return — before a
 * project is connected, for a field an editor hasn't filled in, or if a query
 * fails in production. The site is always fully populated as a result.
 *
 * Only *editorial* copy lives here. The product's capability structure
 * (modules.ts, solutions.ts) is deliberately kept in code, because it
 * describes what the software actually does and shouldn't drift.
 */

export { fallbackSiteSettings } from "./site";

export const fallbackHomePage: HomePage = {
  heroEyebrow: SITE.systemName,
  heroHeading: "One platform to run your entire childcare center.",
  heroDescription:
    "Peekaboo connects classrooms, families, staff and finance in a single system — so your team stops re-entering the same information and starts getting time back.",
  heroCtas: [
    {
      label: CTA.primary.label,
      style: "primary",
      link: { label: CTA.primary.label, type: "internal", internalPath: CTA.primary.href },
    },
    {
      label: CTA.secondary.label,
      style: "secondary",
      link: { label: CTA.secondary.label, type: "internal", internalPath: CTA.secondary.href },
    },
  ],
};

export const fallbackFaqs: Faq[] = FAQS.map((faq, index) => ({
  _id: `faq-${index}`,
  ...faq,
}));

/** Editorial pages that are plain prose rather than composed sections. */
export const fallbackPages: Record<string, Page> = {
  about: {
    title: "About",
    slug: "about",
    eyebrow: "About Peekaboo",
    heading: "Software built around how nurseries actually work",
    intro:
      `Peekaboo is an early-childhood platform built by ${SITE.parentCompany}, based in ${SITE.location}. We work with nurseries, preschools and childcare groups to replace the paperwork, spreadsheets and scattered messages that early-years teams spend their evenings on.`,
  },
  privacy: {
    title: "Privacy Policy",
    slug: "privacy",
    eyebrow: "Legal",
    heading: "Privacy Policy",
    intro: `How we handle information collected through ${SITE.name.toLowerCase()}'s website at peek-a-boo.app.`,
  },
  terms: {
    title: "Terms of Service",
    slug: "terms",
    eyebrow: "Legal",
    heading: "Terms of Service",
    intro: "The terms that cover your use of this website.",
  },
};

/**
 * Long-form legal copy. Kept as structured data rather than portable text so
 * it renders identically with or without Sanity connected.
 */
export const LEGAL_SECTIONS: Record<"privacy" | "terms", { heading: string; body: string }[]> = {
  privacy: [
    {
      heading: "What this policy covers",
      body: `This policy describes how ${SITE.name} collects and uses information when you visit peek-a-boo.app or contact us through this website. It does not cover the ${SITE.products.care} portal or the ${SITE.products.parent} app, which handle children's and family data under a separate agreement with each nursery. If your child attends a setting that uses Peekaboo, please contact the nursery directly about that data.`,
    },
    {
      heading: "Information we collect",
      body: "When you submit the demo request form we collect your name, work email, organisation name, phone number if you provide one, the number of centers you run, and your message — so that we can respond to your enquiry and prepare a relevant demonstration.",
    },
    {
      heading: "How we use it",
      body: "We use what you send us to reply to your enquiry and to follow up about Peekaboo. We do not sell your information, and we do not pass it to third parties for their own marketing.",
    },
    {
      heading: "Keeping your information",
      body: "We keep enquiry correspondence for as long as it is useful to the conversation you started. You can ask us to delete it at any point and we will do so.",
    },
    {
      heading: "Your choices",
      body: `To request a copy of what we hold, correct it, or have it deleted, email ${SITE.email}. We will respond promptly.`,
    },
    {
      heading: "Contact",
      body: `Questions about this policy can be sent to ${SITE.email}, or by phone on ${SITE.phone}. Our address is ${SITE.location}.`,
    },
  ],
  terms: [
    {
      heading: "Using this website",
      body: "This website exists to explain what Peekaboo does and to let you get in touch with our team. You are welcome to browse it and to use the contact form. Please don't use it to send spam, to attempt to disrupt the site, or to misrepresent who you are or who you work for.",
    },
    {
      heading: "Accuracy of information",
      body: "We keep the information on this site as accurate as we can, and product capabilities described here reflect the platform as it stands. Software changes over time, so the specifics of any feature are confirmed during a demonstration rather than by this page alone.",
    },
    {
      heading: "Content and trademarks",
      body: `The content of this site — including the ${SITE.name} name, logo, written copy and product interface designs — belongs to ${SITE.parentCompany} and may not be reproduced without permission.`,
    },
    {
      heading: "The Peekaboo platform",
      body: `Use of the ${SITE.products.care} portal and the ${SITE.products.parent} app is governed by a separate service agreement between ${SITE.parentCompany} and your organisation. These website terms do not replace it.`,
    },
    {
      heading: "Links to other sites",
      body: "Where we link to services we don't operate, we're not responsible for their content or their handling of your information.",
    },
    {
      heading: "Contact",
      body: `Questions about these terms can be sent to ${SITE.email}.`,
    },
  ],
};
