import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset};
 
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans',sans-serif ;
    height: 100vh;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  }
 
  a{
    text-decoration: none;
    color: inherit;
  }
`;
