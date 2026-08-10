/**
 * Peekaboo's real capability set, grouped into seven areas.
 *
 * Every capability listed here maps to an actual module in the Peekaboo Care
 * portal (verified against the portal's own navigation and page components).
 * Nothing here is aspirational — if it's on this list, it exists in the
 * product. Keep it that way.
 */

export type ModuleCategoryId =
  | "children-learning"
  | "parents-communication"
  | "operations"
  | "health-safety"
  | "staff"
  | "finance"
  | "admissions";

export interface Capability {
  name: string;
  description: string;
}

export interface ModuleCategory {
  id: ModuleCategoryId;
  /** Short label used in the explorer's category rail. */
  label: string;
  /** Full heading used on the features page. */
  title: string;
  /** One-sentence promise for this area. */
  summary: string;
  /** Icon key resolved by FeatureIcon.astro. */
  icon: string;
  /** Accent used for the category's icon chip and highlights. */
  tone: "brand" | "gold" | "mint" | "coral" | "violet";
  capabilities: Capability[];
  /** Which product surface visual to pair with this category. */
  preview:
    | "dashboard"
    | "attendance"
    | "dailyReport"
    | "observation"
    | "invoice"
    | "crm"
    | "roster";
}

export const MODULE_CATEGORIES: ModuleCategory[] = [
  {
    id: "children-learning",
    label: "Children & learning",
    title: "Children & learning",
    summary:
      "Every child's profile, progress and learning journey in one continuous record — from enrolment to their last day with you.",
    icon: "curriculum",
    tone: "brand",
    preview: "observation",
    capabilities: [
      {
        name: "Child profiles",
        description:
          "Names, birth dates, languages spoken, allergies, SEN needs and photo permissions — kept current and visible to the people who need them.",
      },
      {
        name: "Classes & age groups",
        description:
          "Organise children into classes and age bands, each with its own capacity, assigned educators and daily-care settings.",
      },
      {
        name: "Curriculum frameworks",
        description:
          "Build your curriculum from learning areas and aspects, then map objectives to age groups — your framework, your structure.",
      },
      {
        name: "Attainment levels",
        description:
          "Define the achievement scale your setting actually uses, colour-coded so progress is readable at a glance.",
      },
      {
        name: "Observations",
        description:
          "Capture what an educator noticed, link it to learning objectives, and record the next steps while it's still fresh.",
      },
      {
        name: "Assessments & reports",
        description:
          "Turn accumulated observations into assessment reports per child, class, learning area or date range.",
      },
    ],
  },
  {
    id: "parents-communication",
    label: "Parents & communication",
    title: "Parents & communication",
    summary:
      "Keep families genuinely connected to their child's day — without adding a second job to your educators' workload.",
    icon: "communication",
    tone: "coral",
    preview: "dailyReport",
    capabilities: [
      {
        name: "Daily reports",
        description:
          "Meals, milk, nap, hygiene, water and medicine, plus how the day felt — drafted by the room, published to parents when it's ready.",
      },
      {
        name: "Mood & wellbeing",
        description:
          "A simple, honest read on the day: happy, ok, sad, tired or excited, alongside a health status if something came up.",
      },
      {
        name: "Announcements & newsletters",
        description:
          "Send announcements, notifications, events and newsletters to the right classes, with scheduling and pinning built in.",
      },
      {
        name: "Moments & media",
        description:
          "Share photos and video from the day with the families who have given permission for them.",
      },
      {
        name: "Events & calendar",
        description:
          "Holidays, trips, performances, meetings and assessments — published to a shared calendar families can actually follow.",
      },
      {
        name: "Photo permissions",
        description:
          "Per-child consent for nursery, media and social use, recorded at admission and respected everywhere.",
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    title: "Nursery operations",
    summary:
      "A live view of your setting — who's in, which rooms are covered, and what needs attention right now.",
    icon: "attendance",
    tone: "mint",
    preview: "attendance",
    capabilities: [
      {
        name: "Live dashboard",
        description:
          "Children present, absences, active staff, classroom occupancy and late arrivals, refreshed through the day.",
      },
      {
        name: "Attendance",
        description:
          "Mark present, late, absent or excused for children and staff, with check-in and check-out times and a note where it matters.",
      },
      {
        name: "Classroom ratios",
        description:
          "See staff-to-child ratios per room as they stand today, so cover gaps surface before they become a problem.",
      },
      {
        name: "Multi-center management",
        description:
          "Run several settings from one account, each with its own licence dates, currency, timezone and details.",
      },
      {
        name: "Calendar & scheduling",
        description:
          "Plan events across the setting with recurrence, audiences and locations, viewable by month or agenda.",
      },
      {
        name: "Roles & access",
        description:
          "Decide exactly which parts of the platform each role can reach, down to the individual screen.",
      },
    ],
  },
  {
    id: "health-safety",
    label: "Health & safety",
    title: "Health & safety",
    summary:
      "The information that matters most, where staff can find it in seconds — and a clear record when something happens.",
    icon: "security",
    tone: "violet",
    preview: "roster",
    capabilities: [
      {
        name: "Health alerts",
        description:
          "Allergies, medical conditions, dietary needs, medication and emergency notes, graded from low to critical.",
      },
      {
        name: "Incident logging",
        description:
          "Record falls, injuries, illness, allergic reactions, behaviour and head injuries with a severity and a full account.",
      },
      {
        name: "Medication tracking",
        description:
          "Log what was administered, when and by whom, so the record is complete before the conversation at pickup.",
      },
      {
        name: "Authorised pickups",
        description:
          "Keep pick-up and drop-off permissions on the child's profile, so the team at the door always knows who's approved.",
      },
      {
        name: "Secure storage",
        description:
          "Children's and families' records held on secure infrastructure with encrypted storage and scheduled backups.",
      },
      {
        name: "Permissioned access",
        description:
          "Role-based controls mean sensitive information is only visible to the staff who genuinely need it.",
      },
    ],
  },
  {
    id: "staff",
    label: "Staff & workforce",
    title: "Staff & workforce",
    summary:
      "Give your team tools built around how they actually work, and take the paperwork off their evenings.",
    icon: "people",
    tone: "gold",
    preview: "roster",
    capabilities: [
      {
        name: "Employee profiles",
        description:
          "Roles, contact and emergency details, joining dates, qualifications and assigned class, kept in one record.",
      },
      {
        name: "Staff attendance",
        description:
          "Track who's in across the setting on the same board you use for children, with the same statuses.",
      },
      {
        name: "Class assignment",
        description:
          "Assign educators to classes so ratios, daily reports and observations all flow to the right room.",
      },
      {
        name: "Internal messaging",
        description:
          "Reach the whole team or a single room without falling back to a personal group chat.",
      },
      {
        name: "Roles & permissions",
        description:
          "Create the roles your organisation actually uses and grant access screen by screen.",
      },
      {
        name: "Complaints & follow-up",
        description:
          "Log concerns from parents or staff with a priority and an owner, and track them through to resolved.",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance & accounts",
    title: "Finance & accounts",
    summary:
      "Fees in, costs out, and a clear picture of where the setting stands — without rebuilding it in a spreadsheet each month.",
    icon: "finance",
    tone: "brand",
    preview: "invoice",
    capabilities: [
      {
        name: "Invoicing",
        description:
          "Build parent invoices from your defined services, with quantities, discounts and VAT calculated as you go.",
      },
      {
        name: "Receipts & payment modes",
        description:
          "Record what's been received and how — cash, cheque, transfer or card — against the right invoice.",
      },
      {
        name: "Services & pricing",
        description:
          "Define the fees and products you actually bill for, including cost, VAT treatment and tax-exempt items.",
      },
      {
        name: "Expenses",
        description:
          "Log spending by type and supplier with VAT and attachments, so the paper trail stays with the entry.",
      },
      {
        name: "Suppliers & purchases",
        description:
          "Keep a supplier directory with payment terms, and raise purchases with line-item detail.",
      },
      {
        name: "Payment vouchers",
        description:
          "Formal records of money paid out to suppliers, with references and multiple payment entries per voucher.",
      },
    ],
  },
  {
    id: "admissions",
    label: "Admissions",
    title: "Admissions CRM",
    summary:
      "Follow every enquiry from first contact to first day, so no family goes quiet because someone forgot to call back.",
    icon: "calendar",
    tone: "coral",
    preview: "crm",
    capabilities: [
      {
        name: "Lead pipeline",
        description:
          "Move enquiries through new, tour booked, toured, waiting list and approved — with lost and rejected recorded honestly.",
      },
      {
        name: "Enquiry records",
        description:
          "Child and parent details, languages, previous nursery, transport and SEN needs, captured once at enquiry.",
      },
      {
        name: "Tours & visit notes",
        description:
          "Book tours, record what was discussed, and keep joining notes attached to the family.",
      },
      {
        name: "Lead sources & referrals",
        description:
          "See which sources and referrers actually bring families through the door.",
      },
      {
        name: "Enrolment checklist",
        description:
          "Track information, documents, evaluation and finance completion so nothing stalls before the start date.",
      },
      {
        name: "Waiting list",
        description:
          "Hold families for a place and convert them the moment capacity opens in the right age group.",
      },
    ],
  },
];

export function getCategory(id: ModuleCategoryId): ModuleCategory {
  const category = MODULE_CATEGORIES.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown module category: ${id}`);
  return category;
}
