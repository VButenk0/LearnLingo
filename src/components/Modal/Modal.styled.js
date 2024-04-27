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
  width: 566px;
  height: auto;
  overflow-y: auto;
  max-height: 90vh;
  z-index: 2000;
  border-radius: 30px;
  background-color: var(--bcgclr);
  padding: 64px;
`;

export const BtnClose = styled.button`
  background-color: transparent;
  position: absolute;
  border: none;
  height: 24px;
  padding: 0;
  top: 20px;
  right: 20px;
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;

export const SvgBtnClose = styled.svg`
  stroke: var(--primary-text);
`;
