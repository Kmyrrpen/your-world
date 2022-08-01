import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    margin: 0;
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
  }
`

export default GlobalStyles;