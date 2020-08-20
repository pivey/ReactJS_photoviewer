import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  min-height: 100%;
  margin: 0px;
  padding: 0px;
  color: black;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 3rem;
  min-height: 100vh
}
`;

export default GlobalStyle;
