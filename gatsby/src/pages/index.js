import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '../utils/BlockContent'
import TableOfContents from '../utils/TableOfContents'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Regions from '../components/partials/Regions'

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Regions regions={data.regions} />
      {data.posts.nodes.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.slug.current}`}>
            <h2>{post.name}</h2>
          </Link>
          {post.image && <Img fluid={post.image.asset.fluid} />}
          <p>{post.description}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    regions: allSanityRegion {
      nodes {
        id
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxHeight: 500) {
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
