import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
  body {
    background: #fbfbfb;
  -webkit-font-smoothing: antialiased;
}
body,
input,
button {
  font-family: Roboto, Arial, Helvetica, sans-serif;
}


a {
  text-decoration: none;
}

`;
