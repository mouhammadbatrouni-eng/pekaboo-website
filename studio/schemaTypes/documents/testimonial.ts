import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorRole',
      title: 'Role / title',
      type: 'string',
      description: 'e.g. "Director, Sunny Days Nursery"',
    }),
    defineField({
      name: 'nurseryName',
      title: 'Nursery / organization name',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Author photo',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'authorName', subtitle: 'nurseryName', media: 'photo'},
  },
})
