import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 64px;
`;

export const LogoWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-family: "Roboto Medium", sans-serif;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }
`;

export const NavWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;
export const StyledNavLink = styled(NavLink)`
  font-family: "Roboto Regular", sans-serif;
  font-size: 16px;
  line-height: 1.25;
  transition: all 0.3s;

  &.active {
    box-sizing: content-box;
    border-bottom: 5px solid var(--accent-color);
  }
`;

export const AuthWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogInBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  use {
    stroke: red;
  }
`;

export const RegisterBtn = styled.button`
  padding: 14px 39px;

  color: var(--white-text);
  background-color: var(--primary-text);
  border-radius: 12px;
`;
