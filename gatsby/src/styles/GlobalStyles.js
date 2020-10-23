import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
    --font-subtle: grey;
  }

  figcaption {
      font-style: italic;
      color: var(--font-subtle);
      margin-top: 0.25rem;
  }

  .header__autolink {
      font-size: 1rem;
      display: inline;
      margin-left: 0.5rem;

      a {
          color: inherit;
      }
  }
`

export default GlobalStyles
