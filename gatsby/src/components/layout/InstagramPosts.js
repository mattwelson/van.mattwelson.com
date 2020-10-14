import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const InstagramStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export function Posts({ instagramPosts, title }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>@m.welson</h3>
      <InstagramStyles>
        {instagramPosts.map(post => (
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <Img fluid={post.image.asset.fluid} alt={post.name} />
          </a>
        ))}
      </InstagramStyles>
    </>
  )
}

export function DefaultPosts({ title }) {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allSanityInstagram(
        limit: 4
        sort: { order: DESC, fields: _createdAt }
      ) {
        nodes {
          name
          url
          region {
            name
          }
          image {
            asset {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  return <Posts instagramPosts={posts.nodes} title={title} />
}

export default function InstagramPosts({ instagramPosts, title }) {
  if (instagramPosts)
    return <Posts instagramPosts={instagramPosts} title={title} />
  return <DefaultPosts title="Photos from my Instagram" />
}
