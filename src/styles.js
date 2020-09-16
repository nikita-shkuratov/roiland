import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
padding: 0px;
margin: 0px;
border: 0px;
}
*,
*:before,
*:after {
box-sizing: border-box;
}
:focus,
:active {
outline: none;
}
a:focus,
a:active {
outline: none;
}
aside,
nav,
footer,
header,
section {
display: block;
}
html,
body {
height: 100%;
min-width: 320px;
}
body {
line-height: 1;
font-family: "Lato"; 
}
input,
button,
textarea {
font-family: "Lato";
}
input::-ms-clear {
display: none;
}
button {
cursor: pointer;
}
button::-moz-focus-inner {
padding: 0;
border: 0;
}
a,
a:visited {
text-decoration: none;
}
a:hover {
text-decoration: none;
}
ul li {
list-style: none;
}
img {
vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
font-weight: inherit;
font-size: inherit;
}
`

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
