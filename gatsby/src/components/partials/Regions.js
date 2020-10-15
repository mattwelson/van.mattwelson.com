import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '../../utils/BlockContent'

const RegionsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;

  .gatsby-image-wrapper {
    height: 500px;
    object-fit: cover;
  }
`

export default function Regions({ regions }) {
  return (
    <RegionsStyles>
      {regions.nodes.map(region => (
        <div key={region.id}>
          <h2>{region.name}</h2>
          <Img fluid={region.image.asset.fluid} />
          <BlockContent blocks={region._rawDescription} />
        </div>
      ))}
    </RegionsStyles>
  )
}
