import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'productShowcaseSection',
  title: 'Product showcase',
  type: 'object',
  icon: ImagesIcon,
  description: 'Screenshots of the Peekaboo portal and mobile app with a short caption each.',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow label', type: 'string'}),
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'items',
      title: 'Screenshots',
      type: 'array',
      validation: (rule) => rule.min(1).max(6),
      of: [
        {
          type: 'object',
          name: 'showcaseItem',
          fields: [
            defineField({
              name: 'image',
              title: 'Screenshot',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
              fields: [
                defineField({name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required()}),
              ],
            }),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
            defineField({
              name: 'surface',
              title: 'Surface',
              type: 'string',
              options: {list: [{title: 'Portal (desktop)', value: 'portal'}, {title: 'Mobile app', value: 'mobile'}]},
              initialValue: 'portal',
            }),
          ],
          preview: {
            select: {title: 'caption', media: 'image'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'heading', count: 'items.length'},
    prepare({title, count}) {
      return {title: title || 'Product showcase', subtitle: `${count || 0} screenshot(s)`}
    },
  },
})
