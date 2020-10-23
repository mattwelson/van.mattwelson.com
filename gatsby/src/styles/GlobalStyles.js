import { createGlobalStyle } from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const GlobalStyles = createGlobalStyle`
    :root {
    --font-subtle: grey;
  }

  figcaption {
      font-style: italic;
      color: var(--font-subtle);
      margin-top: ${rhythm(1 / 4)};
  }

  .header__autolink {
      ${scale(1 / 5)}
      display: inline;
      margin-left: ${rhythm(1 / 4)};

      a {
          color: inherit;
      }
  }
`

export default GlobalStyles
