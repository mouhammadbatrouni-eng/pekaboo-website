/**
 * Feature content for the single-page concept.
 *
 * Deliberately split into two shapes so the section doesn't read as five
 * identical blocks: two "spotlights" get a headline, a sentence and a product
 * visual; the remaining three are compact cards that list capabilities without
 * a paragraph each. Every capability here exists in the Peekaboo Care portal.
 */

import type { ParentScreen } from "../../components/product/ParentAppBody.astro";

type PortalScreenName =
  | "dashboard"
  | "attendance"
  | "dailyReport"
  | "observation"
  | "invoice"
  | "crm"
  | "roster";

export interface FeatureSpotlight {
  id: string;
  eyebrow: string;
  /** The "so what" — what changes for the setting. */
  headline: string;
  body: string;
  visual: { kind: "portal"; screen: PortalScreenName } | { kind: "app"; screen: ParentScreen };
  caption: string;
  /** Short labels only. The visual and headline carry the explanation. */
  capabilities: string[];
}

export interface FeatureCard {
  id: string;
  title: string;
  summary: string;
  icon: string;
  tone: "brand" | "gold" | "mint" | "coral" | "violet";
  capabilities: string[];
}

/** The two areas worth showing in full: what the team runs, what families see. */
export const FEATURE_SPOTLIGHTS: FeatureSpotlight[] = [
  {
    id: "operations",
    eyebrow: "Center operations",
    headline: "See your whole setting at a glance",
    body: "Attendance, occupancy and staff cover update through the day, so you're not chasing four people to find out where the setting stands.",
    visual: { kind: "portal", screen: "dashboard" },
    caption: "The live dashboard in Peekaboo Care",
    capabilities: [
      "Classroom management",
      "Multi-center management",
      "Attendance & check-in",
      "Child profiles",
      "Classroom ratios",
      "Calendar & events",
    ],
  },
  {
    id: "parents-children",
    eyebrow: "Parents & children",
    headline: "Families see the day, as it happens",
    body: "Daily reports, photos and messages reach parents straight from the room — built from the records your team already keeps, not written a second time.",
    visual: { kind: "app", screen: "dailyReport" },
    caption: "The daily report in Peekaboo Parent",
    capabilities: [
      "Daily reports",
      "Photos & moments",
      "Announcements",
      "Observations",
      "Learning journals",
      "Photo permissions",
    ],
  },
];

/** The three supporting areas, kept compact so the section doesn't sprawl. */
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "staff",
    title: "Staff",
    summary: "Records, cover and permissions in one place.",
    icon: "people",
    tone: "gold",
    capabilities: ["Employee profiles", "Staff attendance", "Class assignment", "Roles & access"],
  },
  {
    id: "finance",
    title: "Finance",
    summary: "Fees in, costs out, and a clear monthly picture.",
    icon: "finance",
    tone: "brand",
    capabilities: ["Billing & invoicing", "Payments & receipts", "Expenses", "Suppliers & purchases"],
  },
  {
    id: "insights",
    title: "Insights & security",
    summary: "Know where you stand — and keep records safe.",
    icon: "security",
    tone: "violet",
    capabilities: ["Admissions pipeline", "Health & incidents", "Encrypted storage", "Scheduled backups"],
  },
];
