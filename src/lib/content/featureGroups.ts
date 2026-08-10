/**
 * Feature groupings for the single-page concept.
 *
 * These follow the five plain-language buckets a visitor scans for — Center
 * Operations, Parents & Children, Staff, Finance, Insights & Security —
 * rather than the platform's internal module structure (see modules.ts, used
 * by the multi-page concept). The underlying capabilities are the same, and
 * every one of them exists in the Peekaboo Care portal today.
 */

import type { ParentScreen } from "../../components/product/ParentAppBody.astro";

export interface FeatureItem {
  name: string;
  description: string;
  icon: string;
}

export interface FeatureGroup {
  id: string;
  title: string;
  summary: string;
  /** Which product visual anchors this group. */
  visual:
    | { kind: "portal"; screen: "dashboard" | "attendance" | "dailyReport" | "observation" | "invoice" | "crm" | "roster" }
    | { kind: "app"; screen: ParentScreen };
  caption: string;
  items: FeatureItem[];
}

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "operations",
    title: "Center operations",
    summary: "The day-to-day running of your setting, visible in one place.",
    visual: { kind: "portal", screen: "dashboard" },
    caption: "The live dashboard — attendance, occupancy and staff, updated through the day.",
    items: [
      {
        name: "Classroom management",
        description: "Classes, capacities, assigned educators and per-room daily-care settings.",
        icon: "attendance",
      },
      {
        name: "Center management",
        description: "Run one setting or several, each with its own licence, currency and timezone.",
        icon: "people",
      },
      {
        name: "Attendance",
        description: "Present, late, absent or excused, with check-in and check-out times.",
        icon: "calendar",
      },
      {
        name: "Child profiles",
        description: "Allergies, languages, SEN needs, photo permissions and authorised pickups.",
        icon: "curriculum",
      },
    ],
  },
  {
    id: "parents-children",
    title: "Parents & children",
    summary: "Keeping families close to the day without adding work to the room.",
    visual: { kind: "app", screen: "dailyReport" },
    caption: "The daily report as a parent sees it — meals, nap and mood, published by the room.",
    items: [
      {
        name: "Communication",
        description: "Announcements, notifications, newsletters and events, sent to the right classes.",
        icon: "communication",
      },
      {
        name: "Child development",
        description: "Observations linked to learning objectives, with next steps recorded.",
        icon: "curriculum",
      },
      {
        name: "Daily reports",
        description: "Meals, milk, nap, hygiene and mood — drafted in the room, published to families.",
        icon: "timeline",
      },
      {
        name: "Learning journals",
        description: "Observations become assessment reports per child, class or learning area.",
        icon: "people",
      },
    ],
  },
  {
    id: "staff",
    title: "Staff",
    summary: "Your team's records and cover, without a separate spreadsheet.",
    visual: { kind: "portal", screen: "roster" },
    caption: "Ratios and health alerts — the two things the floor needs to see first.",
    items: [
      {
        name: "Employee management",
        description: "Roles, contact and emergency details, qualifications and joining dates.",
        icon: "people",
      },
      {
        name: "Staff attendance",
        description: "Track who's in on the same board you use for children.",
        icon: "attendance",
      },
      {
        name: "Class assignment",
        description: "Assign educators to rooms so ratios and reports reach the right place.",
        icon: "calendar",
      },
      {
        name: "Roles & access",
        description: "Decide exactly which parts of the platform each role can open.",
        icon: "security",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    summary: "Fees in, costs out, and a picture of where the month stands.",
    visual: { kind: "portal", screen: "invoice" },
    caption: "Invoices built from your defined services, with VAT applied as you go.",
    items: [
      {
        name: "Billing & invoicing",
        description: "Parent invoices from your service list, with quantities, discounts and VAT.",
        icon: "finance",
      },
      {
        name: "Payments & receipts",
        description: "Record what's received and how — cash, cheque, transfer or card.",
        icon: "calendar",
      },
      {
        name: "Expenses",
        description: "Log spending by type and supplier, with VAT and attachments kept together.",
        icon: "attendance",
      },
      {
        name: "Suppliers & purchases",
        description: "A supplier directory with payment terms, plus purchases and payment vouchers.",
        icon: "people",
      },
    ],
  },
  {
    id: "insights",
    title: "Insights & security",
    summary: "Knowing where the setting stands, and keeping its records safe.",
    visual: { kind: "portal", screen: "crm" },
    caption: "The admissions pipeline — every enquiry with an owner and a next step.",
    items: [
      {
        name: "Classroom insights",
        description: "Occupancy and staff-to-child ratios per room, as they stand today.",
        icon: "attendance",
      },
      {
        name: "Admissions pipeline",
        description: "Enquiries tracked from first contact through tour, waiting list and approval.",
        icon: "calendar",
      },
      {
        name: "Health & incidents",
        description: "Allergies and medical conditions by severity, and a full incident record.",
        icon: "security",
      },
      {
        name: "Secure storage",
        description: "Encrypted records, scheduled backups and access controlled by role.",
        icon: "security",
      },
    ],
  },
];
