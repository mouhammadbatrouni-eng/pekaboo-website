import type { Seo, SiteSettings } from "./content/types";
import { urlForImage } from "./sanity/image";

export interface ResolvedSeo {
  title: string;
  description?: string;
  ogImageUrl?: string;
  noIndex: boolean;
}

/**
 * Resolves the effective title/description/OG image for a page: the page's
 * own `seo` fields win, falling back to the site-wide defaults, and finally
 * to the plain page title so a page is never left with an empty <title>.
 */
export function resolveSeo(pageTitle: string, pageSeo: Seo | undefined, site: SiteSettings): ResolvedSeo {
  const title = pageSeo?.metaTitle || (pageTitle ? `${pageTitle} — Peekaboo` : site.defaultSeo?.metaTitle || "Peekaboo");
  const description = pageSeo?.metaDescription || site.defaultSeo?.metaDescription;
  const ogImage = pageSeo?.ogImage || site.defaultSeo?.ogImage;
  const ogImageUrl = urlForImage(ogImage)?.width(1200).height(630).url();

  return {
    title,
    description,
    ogImageUrl,
    noIndex: Boolean(pageSeo?.noIndex),
  };
}
