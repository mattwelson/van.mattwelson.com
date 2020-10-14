import React from 'react'
import { Link, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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
  },
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <figure style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </figure>
      {data.regions.nodes.map(region => (
        <div key={region.id}>
          <h2>{region.name}</h2>
          <Img fluid={region.image.asset.fluid} />
          <BlockContent
            blocks={region._rawDescription}
            serializers={serializers}
            projectId={process.env.GATSBY_SANITY_ID}
            dataset="production"
          />
        </div>
      ))}
      {data.posts.nodes.map(post => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          {post.image && <Img fluid={post.image.asset.fluid} />}
          <BlockContent blocks={post._rawBody} serializers={serializers} />
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    regions: allSanityRegion {
      nodes {
        id
        name
        _rawDescription
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    posts: allSanityPost {
      nodes {
        id
        description
        name
        _rawBody
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        region {
          name
        }
      }
    }
  }
`
