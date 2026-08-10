import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'richTextSection',
  title: 'Rich text block',
  type: 'object',
  icon: DocumentTextIcon,
  description: 'Freeform editorial content — use sparingly for content that doesn’t fit the other section types.',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Rich text block'}
    },
  },
})
