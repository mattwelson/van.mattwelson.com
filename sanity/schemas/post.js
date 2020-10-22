import { FaShuttleVan as icon, FaImage, FaYoutube } from 'react-icons/fa'

export default {
  name: 'post',
  title: 'Posts',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      name: 'featuredDate',
      title: 'Featured Date',
      type: 'date',
      description:
        'The most recent non-null date will feature in a special area of the site',
    },
    {
      name: 'region',
      title: 'Region',
      type: 'reference',
      to: [
        {
          type: 'region',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['location', 'palette'],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A blurb about the area',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageCaption', icon: FaImage },
        { type: 'youtube', icon: FaYoutube },
      ],
    },
    {
      name: 'moreImages',
      title: 'More Images',
      type: 'array',
      of: [
        {
          type: 'imageCaption',
        },
      ],
    },
  ],
  initialValue: () => ({
    date: new Date().toISOString(),
  }),
}
