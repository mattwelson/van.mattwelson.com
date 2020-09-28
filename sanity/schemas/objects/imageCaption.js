import React from 'react'

export default {
  name: 'imageCaption',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      description: 'If blank the caption will be used',
    },
  ],
}
