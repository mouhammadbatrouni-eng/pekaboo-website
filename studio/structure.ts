import type {StructureResolver} from 'sanity/structure'
import {CogIcon, HomeIcon, DocumentIcon, SparklesIcon, CommentIcon, HelpCircleIcon, DocumentsIcon} from '@sanity/icons'

/**
 * Custom desk structure so editors see a friendly, purpose-built menu instead
 * of a flat alphabetical list of every schema type. Singletons (Site Settings,
 * Home Page) are pinned at the top since there's only ever one of each.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Peekaboo Website')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.divider(),
      S.documentTypeListItem('page').title('Pages').icon(DocumentIcon),
      S.documentTypeListItem('feature').title('Features').icon(SparklesIcon),
      S.documentTypeListItem('testimonial').title('Testimonials').icon(CommentIcon),
      S.documentTypeListItem('faq').title('FAQs').icon(HelpCircleIcon),
      S.divider(),
      S.documentTypeListItem('post').title('Blog Posts').icon(DocumentsIcon),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('category').title('Categories'),
    ])
