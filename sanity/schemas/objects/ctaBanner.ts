import { FlagBanner } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'CtaBanner',
  title: 'Cta Banner',
  type: 'object',
  icon: FlagBanner,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Cta',
      type: 'Cta',
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'image',
      title: 'Image',
    }),
    defineField({
      type: 'string',
      name: 'imageAlt',
      title: 'Image Alt',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Cta Banner',
        media,
        title,
      }
    },
  },
})
