import type { Image, PortableTextBlock } from "@sanity/types";

export interface SanityImage extends Image {
  alt?: string;
}

export interface Link {
  label: string;
  type: "internal" | "external";
  internalPath?: string;
  externalUrl?: string;
}

export interface Cta {
  label: string;
  link: Link;
  style: "primary" | "secondary";
}

export interface Seo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

export interface Feature {
  _id: string;
  title: string;
  summary: string;
  icon: string;
  body?: PortableTextBlock[];
}

export interface Testimonial {
  _id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  nurseryName?: string;
  photo?: SanityImage;
}

export interface Faq {
  _id: string;
  question: string;
  answer: PortableTextBlock[];
  group?: string;
}

export interface ShowcaseItem {
  image: SanityImage;
  caption?: string;
  surface: "portal" | "mobile";
}

export type Section =
  | ({ _type: "featureGridSection"; eyebrow?: string; heading: string; description?: string; features: Feature[] })
  | ({ _type: "productShowcaseSection"; eyebrow?: string; heading: string; description?: string; items: ShowcaseItem[] })
  | ({ _type: "testimonialSection"; eyebrow?: string; heading: string; testimonials: Testimonial[] })
  | ({ _type: "faqSection"; eyebrow?: string; heading: string; faqs: Faq[] })
  | ({ _type: "ctaSection"; heading: string; description?: string; ctas: Cta[] })
  | ({ _type: "richTextSection"; heading?: string; body: PortableTextBlock[] });

export interface HomePage {
  heroEyebrow?: string;
  heroHeading: string;
  heroDescription?: string;
  heroCtas?: Cta[];
  heroImage?: SanityImage;
  sections?: Section[];
  seo?: Seo;
}

export interface Page {
  title: string;
  slug: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  sections?: Section[];
  seo?: Seo;
}

export interface Author {
  name: string;
  slug: string;
  role?: string;
  photo?: SanityImage;
  bio?: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: SanityImage;
  author: Author;
  category?: Category;
  publishedAt: string;
  body: PortableTextBlock[];
  seo?: Seo;
}

export interface FooterColumn {
  heading: string;
  links: Link[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteSettings {
  title: string;
  tagline?: string;
  navLinks?: Link[];
  headerCta?: Cta;
  footerColumns?: FooterColumn[];
  socialLinks?: SocialLink[];
  contactEmail?: string;
  defaultSeo?: Seo;
}
