/**
 * The shape every language file must satisfy.
 *
 * Both dictionaries are typed against this, so a missing or misspelled key is
 * a compile error rather than a blank space on the Arabic site.
 */

export type Lang = "en" | "ar";

export interface Dict {
  meta: {
    title: string;
    description: string;
    /** Reading direction for this language. */
    dir: "ltr" | "rtl";
  };

  common: {
    getStarted: string;
    contactUs: string;
    signIn: string;
    explore: string;
    backToTop: string;
    openMenu: string;
    closeMenu: string;
    currentlyViewing: string;
    welcome: string;
    skipToContent: string;
    switchToArabic: string;
    switchToEnglish: string;
    switchToDark: string;
    switchToLight: string;
  };

  nav: {
    plans: string;
    app: string;
    features: string;
    improve: string;
    about: string;
    whyUs: string;
    curriculum: string;
    contact: string;
  };

  hero: {
    badge: string;
    heading: string;
    body: string;
    points: [string, string, string];
  };

  plans: {
    eyebrow: string;
    heading: string;
    body: string;
    mostPopular: string;
    bestFor: string;
    talkToUs: string;
    items: {
      id: string;
      name: string;
      description: string;
      bestFor: string;
      includes: [string, string, string];
    }[];
  };

  bridges: { toApp: string; toFeatures: string; toImprove: string };

  app: {
    eyebrow: string;
    heading: string;
    body: string;
    stepOf: (current: number, total: number) => string;
    beats: { title: string; body: string }[];
    languagesTitle: string;
    languagesBody: string;
  };

  features: {
    eyebrow: string;
    heading: string;
    body: string;
    andAround: string;
    spotlights: {
      id: string;
      eyebrow: string;
      headline: string;
      body: string;
      caption: string;
      capabilities: string[];
    }[];
    cards: { id: string; title: string; summary: string; capabilities: string[] }[];
  };

  improve: {
    eyebrow: string;
    heading: string;
    body: string;
    before: string;
    after: string;
    pairs: { before: string; after: string }[];
    onePlatform: string;
    onePlatformBody: string;
  };

  about: {
    eyebrow: string;
    heading: string;
    body: string;
    usedBy: string;
    audiences: string[];
    closing: string;
    builtBy: string;
  };

  whyUs: {
    eyebrow: string;
    heading: string;
    body: string;
    reasons: { title: string; description: string }[];
  };

  curriculum: {
    eyebrow: string;
    heading: string;
    body: string;
    steps: { step: string; title: string; description: string }[];
    frameworksLabel: string;
    frameworksNote: string;
    plannerCaption: string;
  };

  contact: {
    finalCtaHeading: string;
    eyebrow: string;
    heading: string;
    body: string;
    form: {
      name: string;
      email: string;
      organisation: string;
      phone: string;
      centers: string;
      centersPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
      submit: string;
      sending: string;
      privacyNote: string;
      privacyLink: string;
      successTitle: string;
      success: string;
      error: string;
    };
    expect: { title: string; steps: [string, string, string] };
  };

  /**
   * Strings inside the reproduced product screenshots. The real portal and app
   * are bilingual, so the mockups are localised too — an English dashboard on
   * the Arabic page would misrepresent the product.
   */
  product: {
    nos: string;
    liveDashboard: string;
    live: string;
    childrenPresent: string;
    ofEnrolled: string;
    absentToday: string;
    excused: string;
    activeStaff: string;
    acrossRooms: string;
    classroomOccupancy: string;
    rooms: [string, string, string, string];
    admissionsCrm: string;
    leadPipeline: string;
    last30Days: string;
    stages: [string, string, string, string, string];
    enrolmentChecklist: string;
    checklist: [string, string, string, string];
    curriculumSection: string;
    weeklyPlan: string;
    theme: string;
    activity: string;
    objective: string;
    expected: string;
    themeValue: string;
    activityValue: string;
    objectiveValue: string;
    observationToJournal: string;
    observationQuote: string;
    journalTags: [string, string, string];
  };

  footer: {
    description: string;
    usefulLinks: string;
    contactHeading: string;
    phoneLabel: string;
    rights: string;
    builtBy: string;
    links: { label: string; href: string }[];
    legal: { privacy: string; terms: string };
  };
}
