import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      description: 'Used to cluster related questions, e.g. "Billing" or "Getting started".',
      options: {list: ['General', 'Billing', 'Getting started', 'Security & privacy']},
    }),
  ],
  preview: {
    select: {title: 'question', subtitle: 'group'},
  },
})
