import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  #__next{
    min-height: 100vh;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size:  calc(10px + 0.4vw);
  }
  
  body {
    height: ${(props)=> props.form ? 100+"vh" : 100+"%"};
    overflow: ${(props)=> props.form && "hidden"};
    background-color: #1E1E1E;
    position: relative;
  }
`;
 
export default GlobalStyle;