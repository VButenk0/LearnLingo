import styled from "styled-components";

export const EyeWrpr = styled.div`
  width: 1.25em;
  height: 0.75em;
  position: relative;
  display: inline-block;
  background: #aaa;
  color: currentColor;
  cursor: pointer;

  div {
    overflow: hidden;
    height: 50%;
    position: relative;
    margin-bottom: -1px;
  }

  div:before {
    content: "";
    background: currentColor;
    position: absolute;
    left: 0;
    right: 0;
    height: 300%;
    border-radius: 100%;
  }

  div:last-child:before {
    bottom: 0;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.35em;
    height: 0.35em;
    background: var(--color);
    border: 0.1em solid var(--background);
    border-radius: 100%;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: -0.15em;
    left: calc(33.333% - 0.15em);
    transform: rotate(45deg) scaleX(0);
    transform-origin: left center;
    width: 90%;
    height: 0.1em;
    background: var(--color);
    border-top: 0.1em solid var(--background);
    z-index: 2;
    transition: transform 0.25s;
  }

  &.slash:after {
    transform: rotate(45deg) scaleX(1);
  }
`;
