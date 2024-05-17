import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Regular', sans-serif;
    font-size: 16px;
    min-width: 320px;
    max-width: 1440px;
    min-height: 100vh;
    color: var(--primary-text);
    background-color: var(--bcgclr);
    margin: 0 auto;
  }

  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
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
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--accent-bg);
  }

  @media screen and (max-width: 767px) {
  body{
    max-width: 767px;
    font-size: 12px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  body{
    max-width: 1439px;
    font-size: 14px;
  }
}`;

export default Global;
