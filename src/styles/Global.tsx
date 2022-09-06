import { createGlobalStyle } from 'styled-components';

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
    font-family: 'Merriweather', serif;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
  }
`;

export default GlobalStyles;
