import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Home',
      description: 'Only used inside the Studio to identify this document.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero eyebrow label',
      type: 'string',
      description: 'Small label above the hero heading, e.g. "Nursery Operating System".',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroCtas',
      title: 'Hero buttons',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required()}),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      description: 'Build the rest of the homepage by adding and reordering sections.',
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
    prepare() {
      return {title: 'Home Page'}
    },
  },
})
