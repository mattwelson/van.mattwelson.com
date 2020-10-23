import React from 'react'
import { slug } from 'github-slugger'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TocStyles = styled.div`
  font-size: 0.8rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
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
    margin-left: 0.5rem;
  }

  .toc__h4 {
    margin-left: 1rem;
  }

  .toc__h5 {
    margin-left: 1.5rem;
  }

  .toc__h6 {
    margin-left: 2rem;
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
