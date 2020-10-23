import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Regions from '../components/partials/Regions'
import { rhythm } from '../utils/typography'

const PostLinkStyles = styled.div`
  a {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0 ${rhythm(3)};
    text-decoration: none;
    color: inherit;

    & > h2 {
      margin-top: ${rhythm(1)};
      grid-column: span 2;
    }

    & > p {
      grid-column: span 2;
      padding-right: ${rhythm(3)};
    }

    .gatsby-image-wrapper {
      grid-row: span 2;
    }
  }
`

const PostGroupStyles = styled.div`
  margin-bottom: ${rhythm(5)};
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <PostGroupStyles>
        {data.posts.nodes.map(post => (
          <PostLinkStyles key={post.id}>
            <Link to={`/post/${post.slug.current}`}>
              {post.image && <Img fluid={post.image.asset.fluid} />}
              <h2>{post.name}</h2>
              <p>{post.description}</p>
            </Link>
          </PostLinkStyles>
        ))}
      </PostGroupStyles>
      <Regions regions={data.regions} />
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
