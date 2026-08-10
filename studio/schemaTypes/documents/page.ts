import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  description:
    'A prose page such as About, Privacy Policy or Terms of Service. Use the slug that matches the page you want to override, e.g. “about”.',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      description: 'Used in the browser tab and as the SEO fallback.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'Must match an existing page path — “about”, “privacy” or “terms”.',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow label',
      type: 'string',
      group: 'content',
      description: 'Small label shown above the page heading.',
    }),
    defineField({
      name: 'heading',
      title: 'Page heading',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Sits directly under the heading, before the main body.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      description: 'The main content of the page. Use Heading 2 for section titles.',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
    prepare({title, subtitle}) {
      return {title, subtitle: subtitle ? `/${subtitle}` : 'No slug set'}
    },
  },
})
