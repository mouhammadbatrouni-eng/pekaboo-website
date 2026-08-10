import type { Faq, Feature, HomePage, Page, SiteSettings } from "./types";

/**
 * Placeholder content used whenever Sanity has no data yet (e.g. local dev
 * before a Studio project is connected, or a field an editor hasn't filled
 * in). This is first-party copy written for Peekaboo, not fabricated
 * customer testimonials — the Testimonial schema/component ships fully
 * wired up, but real quotes should come from Sanity once collected rather
 * than being invented here.
 */

/** Wraps plain text in a single portable-text block (paragraph by default, or a heading style). */
function textBlock(key: string, text: string, style: "normal" | "h2" = "normal") {
  return {
    _type: "block" as const,
    _key: key,
    style,
    children: [{ _type: "span" as const, _key: `${key}s`, text }],
  };
}

export const fallbackSiteSettings: SiteSettings = {
  title: "Peekaboo",
  tagline: "The operating system for modern nurseries.",
  navLinks: [
    { label: "Product", type: "internal", internalPath: "/product" },
    { label: "Pricing", type: "internal", internalPath: "/pricing" },
    { label: "About", type: "internal", internalPath: "/about" },
    { label: "Blog", type: "internal", internalPath: "/blog" },
  ],
  headerCta: {
    label: "Book a demo",
    style: "primary",
    link: { label: "Book a demo", type: "internal", internalPath: "/contact" },
  },
  footerColumns: [
    {
      heading: "Product",
      links: [
        { label: "Attendance", type: "internal", internalPath: "/product#attendance" },
        { label: "Daily reports", type: "internal", internalPath: "/product#timeline" },
        { label: "Finance", type: "internal", internalPath: "/product#finance" },
        { label: "Communication", type: "internal", internalPath: "/product#communication" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", type: "internal", internalPath: "/about" },
        { label: "Blog", type: "internal", internalPath: "/blog" },
        { label: "Contact", type: "internal", internalPath: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy policy", type: "internal", internalPath: "/legal/privacy" },
        { label: "Terms of service", type: "internal", internalPath: "/legal/terms" },
      ],
    },
  ],
  contactEmail: "hello@peek-a-boo.app",
  defaultSeo: {
    metaTitle: "Peekaboo — The operating system for modern nurseries",
    metaDescription:
      "Peekaboo brings attendance, daily reports, billing, and family communication into one delightful platform built for nurseries and childcare centers.",
  },
};

export const fallbackFeatures: Feature[] = [
  {
    _id: "attendance",
    title: "Check-in in a tap",
    summary:
      "Track arrivals, departures, and absences in real time, with a check-in board your front desk will actually enjoy using.",
    icon: "attendance",
  },
  {
    _id: "timeline",
    title: "Every day, beautifully documented",
    summary:
      "Share meals, naps, mood, and milestone photos the moment they happen, so parents feel close even while they're away.",
    icon: "timeline",
  },
  {
    _id: "finance",
    title: "Billing that just works",
    summary:
      "Automated invoicing, payment tracking, and a live financial snapshot, so nothing falls through the cracks at month-end.",
    icon: "finance",
  },
  {
    _id: "communication",
    title: "One inbox for the whole nursery",
    summary:
      "Announcements, forms, and parent messages organized by classroom — no more lost paper notes at pickup.",
    icon: "communication",
  },
  {
    _id: "curriculum",
    title: "Classes that grow with every child",
    summary:
      "Plan curriculum, track learning milestones, and keep every classroom organized by age group.",
    icon: "curriculum",
  },
  {
    _id: "people",
    title: "Staff and rooms, fully in sync",
    summary:
      "Assign staff to classrooms, manage enrollment, and see occupancy across your whole center at a glance.",
    icon: "people",
  },
];

export const fallbackFaqs: Faq[] = [
  {
    _id: "faq-1",
    question: "Can Peekaboo replace the separate tools we use today?",
    answer: [
      {
        _type: "block",
        _key: "a1",
        children: [
          {
            _type: "span",
            _key: "a1s",
            text: "Yes. Attendance, daily reports, billing, and parent communication all live in one platform, so you can retire the spreadsheets, group chats, and paper logs you're juggling today.",
          },
        ],
      },
    ],
  },
  {
    _id: "faq-2",
    question: "Do parents need to download an app?",
    answer: [
      {
        _type: "block",
        _key: "a2",
        children: [
          {
            _type: "span",
            _key: "a2s",
            text: "Parents use the Peekaboo mobile app to see daily updates, photos, and messages from their child's classroom in real time.",
          },
        ],
      },
    ],
  },
  {
    _id: "faq-3",
    question: "How long does it take to get set up?",
    answer: [
      {
        _type: "block",
        _key: "a3",
        children: [
          {
            _type: "span",
            _key: "a3s",
            text: "Most centers are up and running within a few days. Our team helps import your children, staff, and classrooms so you can start your first day on Peekaboo with everything already in place.",
          },
        ],
      },
    ],
  },
  {
    _id: "faq-4",
    question: "Is our data secure?",
    answer: [
      {
        _type: "block",
        _key: "a4",
        children: [
          {
            _type: "span",
            _key: "a4s",
            text: "Yes. Children and family data is encrypted in transit and at rest, access is role-based, and we never share your data with third parties.",
          },
        ],
      },
    ],
  },
];

export const fallbackHomePage: HomePage = {
  heroEyebrow: "Nursery Operating System",
  heroHeading: "Run a happier nursery, from check-in to check-out.",
  heroDescription:
    "Peekaboo brings attendance, daily reports, billing, and family communication into one beautiful platform — so your team spends less time on admin and more time with the children.",
  heroCtas: [
    { label: "Book a demo", style: "primary", link: { label: "Book a demo", type: "internal", internalPath: "/contact" } },
    { label: "See how it works", style: "secondary", link: { label: "See how it works", type: "internal", internalPath: "/product" } },
  ],
  sections: [
    {
      _type: "featureGridSection",
      eyebrow: "Everything in one place",
      heading: "One platform, every part of the day",
      description: "The modules your team already relies on — now working together instead of living in six different apps.",
      features: fallbackFeatures.slice(0, 4),
    },
    {
      _type: "productShowcaseSection",
      eyebrow: "See it in action",
      heading: "One system, two beautiful experiences",
      description: "Your team runs the day from the Peekaboo portal — families follow along in real time from the Peekaboo app.",
      items: [],
    },
    {
      _type: "faqSection",
      eyebrow: "Questions",
      heading: "Frequently asked questions",
      faqs: fallbackFaqs,
    },
    {
      _type: "ctaSection",
      heading: "See Peekaboo with your own nursery in mind",
      description: "Book a short walkthrough — we'll show you exactly how it fits your classrooms and your team.",
      ctas: [
        { label: "Book a demo", style: "primary", link: { label: "Book a demo", type: "internal", internalPath: "/contact" } },
        { label: "Explore the product", style: "secondary", link: { label: "Explore the product", type: "internal", internalPath: "/product" } },
      ],
    },
  ],
};

export const fallbackPages: Record<string, Page> = {
  product: {
    title: "Product",
    slug: "product",
    eyebrow: "Product",
    heading: "The full picture of your nursery day",
    intro:
      "From the front desk to the finance office, Peekaboo replaces the spreadsheets, group chats, and paper logs with one connected system your whole team can trust.",
    sections: [
      {
        _type: "featureGridSection",
        heading: "Built for every role in your nursery",
        features: fallbackFeatures,
      },
    ],
  },
  pricing: {
    title: "Pricing",
    slug: "pricing",
    eyebrow: "Pricing",
    heading: "Simple pricing, built around your center",
    intro:
      "Every nursery is different — tell us a bit about yours and we'll put together a plan that fits your classrooms, staff, and budget.",
    sections: [
      {
        _type: "ctaSection",
        heading: "Talk to our team about pricing",
        description: "Book a short call and we'll walk you through plans and a live product demo.",
        ctas: [{ label: "Book a demo", style: "primary", link: { label: "Book a demo", type: "internal", internalPath: "/contact" } }],
      },
    ],
  },
  about: {
    title: "About",
    slug: "about",
    eyebrow: "About Peekaboo",
    heading: "Built by people who understand nurseries",
    intro:
      "Peekaboo started with a simple observation: nursery teams were spending more time on paperwork than with the children in their care. We set out to build the operating system that gives that time back.",
    sections: [
      {
        _type: "featureGridSection",
        heading: "What we believe",
        features: [
          {
            _id: "belief-teams",
            title: "Teams first",
            summary: "Every feature starts with a real question: does this give a nursery team back their time, or just move the busywork somewhere else?",
            icon: "people",
          },
          {
            _id: "belief-families",
            title: "Families deserve to feel close",
            summary: "A quick photo or a daily report shouldn't require a phone call. Parents should feel connected to their child's day as it happens.",
            icon: "timeline",
          },
          {
            _id: "belief-trust",
            title: "Data deserves care",
            summary: "Children's information is some of the most sensitive data there is. We treat security and privacy as a first-class feature, not an afterthought.",
            icon: "security",
          },
        ],
      },
      {
        _type: "ctaSection",
        heading: "Want to see Peekaboo for yourself?",
        description: "We'd love to show you around and hear about your nursery.",
        ctas: [{ label: "Book a demo", style: "primary", link: { label: "Book a demo", type: "internal", internalPath: "/contact" } }],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    slug: "privacy",
    eyebrow: "Legal",
    heading: "Privacy Policy",
    intro: "This page covers how we handle information collected through peek-a-boo.app, our marketing website.",
    sections: [
      {
        _type: "richTextSection",
        body: [
          textBlock("pp-h1", "What this policy covers", "h2"),
          textBlock(
            "pp-1",
            "This policy describes how Peekaboo collects and uses information when you visit peek-a-boo.app or get in touch through our contact form. It does not cover the Peekaboo nursery management portal or mobile app, which handle children's and family data under separate agreements with each nursery — please contact your nursery directly, or reach us at hello@peek-a-boo.app, for questions about that data.",
          ),
          textBlock("pp-h2", "Information we collect", "h2"),
          textBlock(
            "pp-2",
            "When you submit our contact form, we collect your name, email address, nursery name (if provided), and the message you send us, so we can respond to your enquiry. We also use standard analytics tools to understand how visitors use this website; this data is aggregated and not used to identify you personally.",
          ),
          textBlock("pp-h3", "How we use it", "h2"),
          textBlock(
            "pp-3",
            "We use contact form submissions solely to respond to your enquiry and, if you agree, to follow up about Peekaboo. We do not sell your information to third parties.",
          ),
          textBlock("pp-h4", "Questions", "h2"),
          textBlock(
            "pp-4",
            "If you have questions about this policy or want us to delete information you've shared with us, email hello@peek-a-boo.app and we'll take care of it promptly.",
          ),
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    slug: "terms",
    eyebrow: "Legal",
    heading: "Terms of Service",
    intro: "These terms cover your use of peek-a-boo.app, our marketing website.",
    sections: [
      {
        _type: "richTextSection",
        body: [
          textBlock("tos-h1", "Using this website", "h2"),
          textBlock(
            "tos-1",
            "This website is provided to help you learn about Peekaboo and get in touch with our team. You're welcome to browse it and use the contact form to reach out — please don't use it to submit spam, attempt to disrupt the site, or misrepresent who you are.",
          ),
          textBlock("tos-h2", "Content and trademarks", "h2"),
          textBlock(
            "tos-2",
            "All content on this site — including the Peekaboo name, logo, and product screenshots — belongs to Peekaboo and may not be reused without permission.",
          ),
          textBlock("tos-h3", "The Peekaboo product itself", "h2"),
          textBlock(
            "tos-3",
            "Use of the Peekaboo nursery management portal and mobile app is governed by a separate agreement between Peekaboo and your nursery, not by these website terms.",
          ),
          textBlock("tos-h4", "Questions", "h2"),
          textBlock("tos-4", "Questions about these terms? Email us at hello@peek-a-boo.app."),
        ],
      },
    ],
  },
};
