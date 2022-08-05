import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    user-select: none;

    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    :root {
      font-size: 12px;
    }
  }
`
