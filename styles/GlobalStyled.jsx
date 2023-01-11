import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size:  calc(10px + 0.4vw);
  }
  
  body {
    height: 100vh;
    background-color: #1E1E1E;
  }
`;
 
export default GlobalStyle;