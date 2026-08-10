import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'faqSection',
  title: 'FAQ',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow label', type: 'string'}),
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'faqs',
      title: 'Questions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', count: 'faqs.length'},
    prepare({title, count}) {
      return {title: title || 'FAQ', subtitle: `${count || 0} question(s)`}
    },
  },
})
