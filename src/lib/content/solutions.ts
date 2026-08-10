import { SITE } from "./site";

/**
 * The three ways an organisation can adopt Peekaboo. These mirror the three
 * business models published on peek-a-boo.app, rewritten for clarity.
 */
export interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  includes: string[];
  icon: string;
  /** Visually emphasise one option as the common starting point. */
  featured?: boolean;
}

export const SOLUTIONS: Solution[] = [
  {
    id: "use-peekaboo",
    name: "Use Peekaboo",
    tagline: "Launch on the platform as it is",
    description:
      "Start with the full Peekaboo platform and the modules your setting needs. Nothing to build, nothing to specify — you're running on proven software from day one.",
    bestFor: "Settings that want to be up and running quickly",
    includes: [
      `${SITE.products.care} for your team`,
      `${SITE.products.parent} for families`,
      "The modules that fit how you operate",
      "Ongoing platform updates",
    ],
    icon: "attendance",
    featured: true,
  },
  {
    id: "customize-your-app",
    name: "Customise your own app",
    tagline: "Your brand in families' hands",
    description:
      "Keep the Peekaboo Care platform running your operation, and give families a parent app carrying your own name, logo and identity instead of ours.",
    bestFor: "Groups with an established brand families already know",
    includes: [
      "Parent app in your branding",
      "Your logo, colours and identity",
      `Powered by ${SITE.products.care}`,
      "Published under your organisation",
    ],
    icon: "communication",
  },
  {
    id: "build-your-own",
    name: "Build your own system",
    tagline: "Shaped around how you operate",
    description:
      "For organisations whose processes don't fit an off-the-shelf platform: a management system and parent app designed around your operation, built on Peekaboo's foundations.",
    bestFor: "Larger groups with specific operational requirements",
    includes: [
      "Custom management system",
      "Custom parent application",
      "Modules designed to your process",
      "Built on proven infrastructure",
    ],
    icon: "curriculum",
  },
];

/** The two halves of the Peekaboo ecosystem. */
export const PRODUCTS = [
  {
    id: "care",
    name: SITE.products.care,
    audience: "For nursery teams",
    description:
      "The platform your educators, administrators and management run the setting from — attendance, daily reports, curriculum, staff, finance and admissions in one place.",
    href: "/peekaboo-care",
    surface: "Web portal",
    icon: "attendance",
    highlights: [
      "Live operational dashboard",
      "Curriculum, observations & assessment",
      "Invoicing, expenses & accounts",
      "Admissions pipeline",
    ],
  },
  {
    id: "parent",
    name: SITE.products.parent,
    audience: "For families",
    description:
      "The mobile app where parents follow their child's day as it happens — daily reports, moments, announcements, events and the information they're responsible for keeping current.",
    href: "/peekaboo-parent",
    surface: "Mobile app",
    icon: "timeline",
    highlights: [
      "Daily reports as they're published",
      "Photos & moments from the room",
      "Announcements & events",
      "English and Arabic, with full RTL",
    ],
  },
] as const;
