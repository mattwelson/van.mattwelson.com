import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '../utils/BlockContent'
import TableOfContents from '../utils/TableOfContents'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const PostStyles = styled.article`
  display: grid;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 250px;
    grid-auto-flow: dense;
    gap: ${rhythm(3)} ${rhythm(2)};

    .post__details {
      grid-column: 2;
      margin-top: ${rhythm(1)};

      p {
        opacity: 0.8;
        font-size: 0.9rem;
      }
    }

    .post__toc {
      grid-column: 2;
      position: sticky;
      top: 0;
      align-self: start;
      max-height: 100vh;
      overflow-y: auto;
    }
  }
`

export default function PostTemplate({ data }) {
  const { post } = data
  return (
    <Layout>
      <SEO title={post.name} description={post.description} />
      <PostStyles key={post.id}>
        <div className="post__details">
          <h1>{post.name}</h1>
          <p>{post.description}</p>
        </div>
        {post.image && <Img fluid={post.image.asset.fluid} />}
        <TableOfContents blocks={post._rawBody} className="post__toc" />
        <BlockContent blocks={post._rawBody} className="post__body" />
      </PostStyles>
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
