import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Regions from '../components/partials/Regions'

const PostLinkStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem 3rem;

  & > a {
    margin-top: 1rem;
    grid-column: span 2;
  }

  & > p {
    grid-column: span 2;
  }

  .gatsby-image-wrapper {
    grid-row: span 2;
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Regions regions={data.regions} />
      {data.posts.nodes.map(post => (
        <PostLinkStyles key={post.id}>
          {post.image && <Img fluid={post.image.asset.fluid} />}
          <Link to={`/post/${post.slug.current}`}>
            <h2>{post.name}</h2>
          </Link>
          <p>{post.description}</p>
        </PostLinkStyles>
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
