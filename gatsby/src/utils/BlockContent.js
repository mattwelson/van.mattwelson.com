import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { slug } from 'github-slugger'
import { Link } from 'gatsby'
import { HiOutlineLink } from 'react-icons/hi'

function serializers(autolinkHeaders) {
  return {
    types: {
      // eslint-disable-next-line react/display-name
      youtube: ({ node }) => {
        const { url } = node
        const id = getYouTubeId(url)
        return <YouTube videoId={id} />
      },
      imageCaption: ({ node, options }) => {
        const sanityConfig = {
          projectId: options.projectId,
          dataset: options.dataset,
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
        if (!autolinkHeaders)
          return BlockContent.defaultSerializers.types.block(props)

        const { style = 'normal', _key } = props.node
        if (/^h\d/.test(style)) {
          const headerId = slug(props.children[0])
          const level = style.replace(/[^\d]/g, '')
          const Header = style
          if (/[1-4]/.test(level)) {
            return (
              <Header id={headerId} key={_key}>
                {props.children}
                <Link to={`#${headerId}`}>
                  <HiOutlineLink />
                </Link>
              </Header>
            )
          }
        }

        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props)
      },
    },
  }
}

export default function IndexPage({ blocks, autolinkHeaders = true, ...rest }) {
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers(autolinkHeaders)}
      projectId={process.env.GATSBY_SANITY_ID}
      dataset="production"
      {...rest}
    />
  )
}
