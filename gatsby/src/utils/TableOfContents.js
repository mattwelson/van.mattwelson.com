import React from 'react'
import { slug } from 'github-slugger'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm, scale } from './typography'

const TocStyles = styled.div`
  ${scale(-2 / 5)}

  h3 {
    margin-top: ${rhythm(1 / 2)};
    margin-bottom: ${rhythm(1 / 2)};
    ${scale(0)}
  }

  ul {
    margin-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .toc__h3 {
    margin-left: ${rhythm(1 / 2)};
  }

  .toc__h4 {
    margin-left: ${rhythm(2 / 2)};
  }

  .toc__h5 {
    margin-left: ${rhythm(3 / 2)};
  }

  .toc__h6 {
    margin-left: ${rhythm(4 / 2)};
  }
`

export default function TableOfContents({ blocks, ...rest }) {
  const headers = blocks
    .filter(node => /^h\d/.test(node.style))
    .map(({ style, children, _key }) => {
      const headerId = slug(children[0].text)
      return (
        <li className={`toc__${style}`} key={_key}>
          <Link to={`#${headerId}`}>{children[0].text}</Link>
        </li>
      )
    })

  return (
    <TocStyles {...rest}>
      <h3>Contents</h3>
      <ul>{headers}</ul>
    </TocStyles>
  )
}
