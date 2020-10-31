import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

const HeaderStyles = styled.header`
  margin-bottom: ${rhythm(1)};

  a {
    text-decoration: none;
  }

  .brand {
    color: var(--color-red);
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles
    style={{
      marginBottom: rhythm(1),
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link className="brand" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
