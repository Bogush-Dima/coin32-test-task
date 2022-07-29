import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
    text-decoration: none;
  }

  body {
    margin: 0;
    padding: 0;
    background: #151515;
  }
`;