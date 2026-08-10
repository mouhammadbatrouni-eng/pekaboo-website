import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export default defineType({
  name: 'ctaSection',
  title: 'Call-to-action banner',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'ctas',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (rule) => rule.min(1).max(2),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'CTA banner'}
    },
  },
})
