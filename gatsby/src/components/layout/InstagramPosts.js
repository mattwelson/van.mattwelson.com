import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa'

const InstagramStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  a {
    max-width: 400px;
    min-width: 200px;
  }
`

const HeaderStyles = styled.div`
  text-align: center;
`

export function Posts({ instagramPosts, title }) {
  return (
    <>
      <HeaderStyles>
        <h2>@m.welson</h2>
        <h3>{title}</h3>
        <h2>
          <FaInstagram />
        </h2>
      </HeaderStyles>
      <InstagramStyles>
        {instagramPosts.map(({ url, image, name, id }) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={id}>
            <Img fluid={image.asset.fluid} alt={name} />
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
          id
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
  return <DefaultPosts />
}
