import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '../utils/BlockContent'
import TableOfContents from '../utils/TableOfContents'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function PostTemplate({ data }) {
  const { post } = data
  return (
    <Layout>
      <SEO title={post.name} />
      <div key={post.id}>
        <h1>{post.name}</h1>
        {post.image && <Img fluid={post.image.asset.fluid} />}
        <TableOfContents blocks={post._rawBody} />
        <BlockContent blocks={post._rawBody} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($pageId: String) {
    post: sanityPost(id: { eq: $pageId }) {
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
`
