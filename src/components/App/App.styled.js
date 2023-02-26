import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily.manrope};
    font-weight: ${({ theme }) => theme.fontWeight.medium};;
    color: ${({ theme }) => theme.colors.mainText}; 
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }

  * {
    box-sizing:border-box;
  }

  
  #root {
    height:100vh;
    display:flex;
    flex-direction:column;
  }

  main {
    flex-grow:1;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  font-family: inherit;
  color: inherit;
}
`;
