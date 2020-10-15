import React from 'react'
import { slug } from 'github-slugger'
import { Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

export default function TableOfContents({ blocks, ...rest }) {
  const headers = blocks
    .filter(node => /^h\d/.test(node.style))
    .map(({ style, children, _key }) => {
      const headerId = slug(children[0].text)
      return (
        <li className={`toc-${style}`} key={_key}>
          <Link to={`#${headerId}`}>{children[0].text}</Link>
        </li>
      )
    })

  return (
    <div {...rest}>
      <h3>Table of Contents</h3>
      <ul>{headers}</ul>
    </div>
  )
}
