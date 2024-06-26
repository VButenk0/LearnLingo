import { TextField } from "@mui/material";
import { Form } from "formik";
import styled from "styled-components";

export const ModalContentWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-bottom: 40px;

  h2 {
    font-family: "Roboto Medium";
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.8px;
  }

  p {
    color: var(--translucent80-text);
    line-height: 1.4;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const OneInputWrpr = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const InputStyled = styled(TextField)`
  flex: 1;
  div {
    border-radius: 12px;
  }
  input {
    padding: 16px 18px;
  }
  label {
    color: var(--primary-text);
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: var(--accent-color);
  padding: 16px;

  color: var(--white-text);
  font-family: "Roboto Bold";
  font-size: 18px;
  line-height: 1.6;
  transition: all 0.5s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;

export const LogOutModalWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-family: "Roboto Medium";
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.8px;
  }
  p {
    color: var(--translucent80-text);
    line-height: 1.4;
  }
`;

export const LogoutButtonsWrpr = styled.button`
  border-radius: 0.75rem;
  background-color: var(--logout-btn);
  padding: 1rem 2rem;
  outline: none;
  width: 100%;

  color: var(--white-text);
  font-family: "Roboto Bold";
  font-size: 1.125rem;
  line-height: 1.6;
  transition: all 0.5s;

  &:hover {
    color: var(--white-text);
    background-color: var(--logout-btn-hover);
  }
`;
