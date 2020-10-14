import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { slug } from 'github-slugger'
import { Link } from 'gatsby'

const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} />
    },
    imageCaption: ({ node }) => {
      const sanityConfig = {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: 'production',
      }
      const fluid = getFluidGatsbyImage(
        node.image.asset._ref,
        { maxWidth: 960 },
        sanityConfig
      )
      return (
        <figure>
          <Img fluid={fluid} alt={node.altText || node.caption} />
          {node.caption && <figcaption>{node.caption}</figcaption>}
        </figure>
      )
    },
    block: props => {
      const { style = 'normal' } = props.node

      if (/^h\d/.test(style)) {
        const headerId = slug(props.children[0])
        const level = style.replace(/[^\d]/g, '')
        const Header = style
        if (/[1-4]/.test(level)) {
          return (
            <Header id={headerId}>
              {props.children}
              <Link to={`#${headerId}`}>#</Link>
            </Header>
          )
        }
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props)
    },
  },
}

export default function IndexPage({ blocks, ...rest }) {
  return <BlockContent blocks={blocks} serializers={serializers} {...rest} />
}
