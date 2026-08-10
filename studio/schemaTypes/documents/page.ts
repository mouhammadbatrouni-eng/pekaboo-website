import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  description: 'A general-purpose page such as Product, Pricing, or About.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Determines the page URL, e.g. "pricing" becomes /pricing.',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Header eyebrow label',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Page heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
        {type: 'featureGridSection'},
        {type: 'productShowcaseSection'},
        {type: 'testimonialSection'},
        {type: 'faqSection'},
        {type: 'ctaSection'},
        {type: 'richTextSection'},
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
    prepare({title, subtitle}) {
      return {title, subtitle: subtitle ? `/${subtitle}` : undefined}
    },
  },
})
