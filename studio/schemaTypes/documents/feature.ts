import {defineField, defineType} from 'sanity'
import {SparklesIcon} from '@sanity/icons'

const ICON_OPTIONS = [
  {title: 'Attendance (check)', value: 'attendance'},
  {title: 'Timeline / daily reports (camera)', value: 'timeline'},
  {title: 'Finance (wallet)', value: 'finance'},
  {title: 'Communication (chat)', value: 'communication'},
  {title: 'Children / people', value: 'people'},
  {title: 'Classes / curriculum (book)', value: 'curriculum'},
  {title: 'Calendar', value: 'calendar'},
  {title: 'Shield / security', value: 'security'},
]

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  icon: SparklesIcon,
  description: 'A single product capability, reused across the homepage and Product page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Short summary',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {list: ICON_OPTIONS},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Extended description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Optional longer explanation shown on the Product page.',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'summary'},
  },
})
