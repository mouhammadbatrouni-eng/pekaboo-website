import { sanityClient } from "./client";
import {
  fallbackFaqs,
  fallbackHomePage,
  fallbackPages,
  fallbackSiteSettings,
} from "../content/fallback";
import type { Faq, HomePage, Page, Post, SiteSettings } from "../content/types";

const SEO_PROJECTION = `seo{metaTitle, metaDescription, ogImage{asset, "alt": ogImage.alt}, noIndex}`;
const LINK_PROJECTION = `{label, type, internalPath, externalUrl}`;
const CTA_PROJECTION = `{label, style, link${LINK_PROJECTION}}`;
const FEATURE_PROJECTION = `{_id, title, summary, icon, body}`;
const TESTIMONIAL_PROJECTION = `{_id, quote, authorName, authorRole, nurseryName, photo}`;
const FAQ_PROJECTION = `{_id, question, answer, group}`;
const SHOWCASE_ITEM_PROJECTION = `{image, caption, surface}`;

const SECTIONS_PROJECTION = `
  sections[]{
    _type,
    _type == "featureGridSection" => {eyebrow, heading, description, features[]->${FEATURE_PROJECTION}},
    _type == "productShowcaseSection" => {eyebrow, heading, description, items[]${SHOWCASE_ITEM_PROJECTION}},
    _type == "testimonialSection" => {eyebrow, heading, testimonials[]->${TESTIMONIAL_PROJECTION}},
    _type == "faqSection" => {eyebrow, heading, faqs[]->${FAQ_PROJECTION}},
    _type == "ctaSection" => {heading, description, ctas[]${CTA_PROJECTION}},
    _type == "richTextSection" => {heading, body},
  }
`;

/** Fetches Sanity data, returning `null` on any error or missing config instead of throwing. */
async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<T>(query, params);
    return result ?? null;
  } catch (error) {
    console.error("[sanity] Query failed, falling back to placeholder content:", error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await safeFetch<SiteSettings>(
    `*[_type == "siteSettings"][0]{
      title, tagline, navLinks[]${LINK_PROJECTION}, headerCta${CTA_PROJECTION},
      footerColumns[]{heading, links[]${LINK_PROJECTION}},
      socialLinks[]{platform, url}, contactEmail, ${SEO_PROJECTION.replace("seo", "defaultSeo")}
    }`,
  );
  return data ?? fallbackSiteSettings;
}

export async function getHomePage(): Promise<HomePage> {
  const data = await safeFetch<HomePage>(
    `*[_type == "homePage"][0]{
      heroEyebrow, heroHeading, heroDescription, heroCtas[]${CTA_PROJECTION}, heroImage,
      ${SECTIONS_PROJECTION}, ${SEO_PROJECTION}
    }`,
  );
  return data ?? fallbackHomePage;
}

export async function getPage(slug: string): Promise<Page | null> {
  const data = await safeFetch<Page>(
    `*[_type == "page" && slug.current == $slug][0]{
      title, "slug": slug.current, eyebrow, heading, intro, ${SECTIONS_PROJECTION}, ${SEO_PROJECTION}
    }`,
    { slug },
  );
  return data ?? fallbackPages[slug] ?? null;
}

export async function getFaqs(): Promise<Faq[]> {
  const data = await safeFetch<Faq[]>(`*[_type == "faq"] | order(_createdAt asc)${FAQ_PROJECTION}`);
  return data && data.length > 0 ? data : fallbackFaqs;
}

export async function getPosts(): Promise<Post[]> {
  const data = await safeFetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc){
      _id, title, "slug": slug.current, excerpt, coverImage,
      author->{name, "slug": slug.current, role, photo},
      category->{title, "slug": slug.current},
      publishedAt
    }`,
  );
  return data ?? [];
}

export async function getPost(slug: string): Promise<Post | null> {
  return safeFetch<Post>(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, excerpt, coverImage,
      author->{name, "slug": slug.current, role, photo, bio},
      category->{title, "slug": slug.current},
      publishedAt, body, ${SEO_PROJECTION}
    }`,
    { slug },
  );
}
