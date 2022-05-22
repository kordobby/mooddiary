import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    background-color: #ffffff;
    display : flex;
    justify-content : center;
    margin-top : 100px;
}

:root {
    --blue: #0080B9;
    --yellow : #FDC813;
    --red : #EC4E23;
    --green : #0B7526;
    --black : #5B5B5B;
  }
`;

export default GlobalStyle;