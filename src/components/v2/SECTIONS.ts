/** The single-page journey, in scroll order. Drives the nav, scroll spy and anchors. */
export const SECTIONS = [
  { id: "plans", label: "Plans" },
  { id: "app", label: "Our App" },
  { id: "features", label: "Features" },
  { id: "improve", label: "Improve" },
  { id: "about", label: "About" },
  { id: "why-us", label: "Why Us" },
  { id: "curriculum", label: "Curriculum" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
