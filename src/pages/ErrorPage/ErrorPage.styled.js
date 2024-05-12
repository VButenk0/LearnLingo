import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPageWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
`;

export const ErrorType = styled.p`
  font-family: "Roboto Bold";
  font-size: 176px;
`;
export const ErrorTitle = styled.p`
  font-family: "Roboto Bold";
  font-size: 36px;
  margin-top: -30px;
`;

export const ErrorText = styled.p`
  padding-bottom: 10px;
`;

export const ErrorBtn = styled(Link)`
  width: fit-content;
  padding: 16px 44px;
  margin: 0 auto;

  color: var(--white-text);
  background-color: var(--accent-color);
  border-radius: 12px;

  font-size: 18px;
  font-family: "Roboto Bold";

  transition: all 0.3s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;
