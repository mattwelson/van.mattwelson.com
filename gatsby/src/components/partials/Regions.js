import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '../../utils/BlockContent'
import { rhythm } from '../../utils/typography'

const RegionsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};

  .gatsby-image-wrapper {
    height: ${rhythm(15)};
    object-fit: cover;
    margin-bottom: ${rhythm(1 / 4)};
  }
`

export default function Regions({ regions }) {
  return (
    <RegionsStyles>
      {regions.nodes.map(region => (
        <div key={region.id}>
          <Img fluid={region.image.asset.fluid} />
          <h4>{region.name}</h4>
          {region._rawDescription && (
            <BlockContent blocks={region._rawDescription} />
          )}
        </div>
      ))}
    </RegionsStyles>
  )
}
