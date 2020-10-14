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
        console.log({ slug: slug(props.children[0]), props })
        const level = style.replace(/[^\d]/g, '')
        if (level === '1') {
          return (
            <h1>
              {props.children}
              <Link to={`#${slug(props.children[0])}`}>Icon</Link>
            </h1>
          )
        }
        // TODO: DRY
        if (level === '2') {
          return (
            <h2>
              {props.children}
              <Link to={`#${slug(props.children[0])}`}>Icon</Link>
            </h2>
          )
        }
        // TODO: DRY
        if (level === '3') {
          return (
            <h3>
              {props.children}
              <Link to={`#${slug(props.children[0])}`}>Icon</Link>
            </h3>
          )
        }
        // TODO: DRY
        if (level === '4') {
          return (
            <h4>
              {props.children}
              <Link to={`#${slug(props.children[0])}`}>Icon</Link>
            </h4>
          )
        }
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        )
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props)
    },
  },
}

export default function IndexPage({ blocks, ...rest }) {
  return <BlockContent blocks={blocks} serializers={serializers} {...rest} />
}
