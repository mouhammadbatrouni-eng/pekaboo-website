import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonials',
  type: 'object',
  icon: CommentIcon,
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow label', type: 'string'}),
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', count: 'testimonials.length'},
    prepare({title, count}) {
      return {title: title || 'Testimonials', subtitle: `${count || 0} testimonial(s)`}
    },
  },
})
