import { FaCameraRetro as icon } from 'react-icons/fa'

export default {
  name: 'instagram',
  title: 'Instagram',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
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
      name: 'region',
      title: 'Region',
      type: 'reference',
      to: [
        {
          type: 'region',
        },
      ],
    },
  ],
}
