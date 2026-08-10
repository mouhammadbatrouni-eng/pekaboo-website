import { en } from "./en";
import { ar } from "./ar";
import type { Dict, Lang } from "./types";

export type { Dict, Lang };

const DICTS: Record<Lang, Dict> = { en, ar };

export function getDict(lang: Lang): Dict {
  return DICTS[lang];
}

/** Where each language's single-page site lives. */
export const LANG_ROUTES: Record<Lang, string> = {
  en: "/v2",
  ar: "/v2/ar",
};

export const LANG_LABELS: Record<Lang, { native: string; code: string }> = {
  en: { native: "English", code: "EN" },
  ar: { native: "العربية", code: "AR" },
};

export const OTHER_LANG: Record<Lang, Lang> = { en: "ar", ar: "en" };
