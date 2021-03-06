import React from 'react'
import { FaGithub, FaStrava, FaTwitterSquare } from 'react-icons/fa'
import styled from 'styled-components'
import InstagramPosts from './InstagramPosts'
import { rhythm, scale } from '../../utils/typography'

const FooterStyles = styled.div`
  text-align: center;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(5)};

  .subtle {
    color: var(--font-subtle);
  }
`

const SocialGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const SocialItemStyle = styled.a`
  color: inherit;
  text-decoration: none;

  .social__icon {
    ${scale(1)};
    transition: color 0.2s;
  }

  &:hover .social__icon {
    color: ${({ brand }) => brand};
  }
`

export default function Footer({ ...rest }) {
  return (
    <footer {...rest}>
      <InstagramPosts />
      <FooterStyles>
        <SocialGridStyle>
          <SocialItemStyle
            href="https://twitter.com/mattwelson"
            target="_blank"
            rel="noreferrer noopener"
            brand="#1da1f2"
          >
            <div className="social__icon">
              <FaTwitterSquare />
            </div>
            <h2>@MattWelson</h2>
          </SocialItemStyle>
          <SocialItemStyle
            href="https://github.com/mattwelson"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="social__icon">
              <FaGithub />
            </div>
            <h2>@MattWelson</h2>
          </SocialItemStyle>
          <SocialItemStyle
            href="https://www.strava.com/athletes/37049548"
            target="_blank"
            rel="noreferrer noopener"
            brand="#fc5200"
          >
            <div className="social__icon">
              <FaStrava />
            </div>
            <h2>Strava</h2>
          </SocialItemStyle>
        </SocialGridStyle>

        <div className="subtle">© {new Date().getFullYear()}, Built by me.</div>
      </FooterStyles>
    </footer>
  )
}
