import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({ value }) => {
  const { url, description } = value
  const id = getYouTubeId(url)
  return (
    <div>
      <YouTube videoId={id} />
      <p style={{ textAlign: 'center' }}>
        <small>{description}</small>
      </p>
    </div>
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      url: 'url',
      description: 'description',
    },
    component: Preview,
  },
}
