import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  min-width: 272px;
  max-width: 95%;
  height: auto;
  overflow-y: auto;
  max-height: 90vh;
  z-index: 2000;
  border-radius: 1.875rem;
  background-color: var(--bcgclr);
  padding: 4rem;

  @media only screen and (max-width: 1439px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 767px) {
    padding: 2rem;
  }
`;

export const BtnClose = styled.button`
  background-color: transparent;
  position: absolute;
  border: none;
  padding: 0;
  top: 1.25rem;
  right: 1.25rem;
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.2;
  }

  @media only screen and (max-width: 767px) {
    top: 0.75rem;
    right: 0.75rem;
  }
`;

export const SvgBtnClose = styled.svg`
  height: 1.5rem;
  stroke: var(--primary-text);
`;
