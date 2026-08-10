import {defineField, defineType} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export default defineType({
  name: 'featureGridSection',
  title: 'Feature grid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow label', type: 'string'}),
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'feature'}]}],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', count: 'features.length'},
    prepare({title, count}) {
      return {title: title || 'Feature grid', subtitle: `${count || 0} feature(s)`}
    },
  },
})
