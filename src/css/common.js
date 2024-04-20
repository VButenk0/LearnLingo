import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`

body{
  font-family: 'Roboto Regular';
  font-size: 16px;
  min-height: 100vh;
  color: var(--primary-text);
  background-color: var(--bcgclr);
  margin: 0;
}

h1,
h2,
h3,
h4,
p
 {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
}`;

export default Global;
