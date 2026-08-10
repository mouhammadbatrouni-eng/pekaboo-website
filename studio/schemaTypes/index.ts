import siteSettings from './documents/siteSettings'
import homePage from './documents/homePage'
import page from './documents/page'
import feature from './documents/feature'
import testimonial from './documents/testimonial'
import faq from './documents/faq'
import post from './documents/post'
import author from './documents/author'
import category from './documents/category'

import seo from './objects/seo'
import link from './objects/link'
import cta from './objects/cta'
import featureGridSection from './objects/sections/featureGridSection'
import productShowcaseSection from './objects/sections/productShowcaseSection'
import testimonialSection from './objects/sections/testimonialSection'
import faqSection from './objects/sections/faqSection'
import ctaSection from './objects/sections/ctaSection'
import richTextSection from './objects/sections/richTextSection'

export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  page,
  feature,
  testimonial,
  faq,
  post,
  author,
  category,
  // Reusable objects
  seo,
  link,
  cta,
  // Page-builder sections
  featureGridSection,
  productShowcaseSection,
  testimonialSection,
  faqSection,
  ctaSection,
  richTextSection,
]
