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

export const LogInBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto Bold", sans-serif;
  line-height: 1.25;

  use {
    stroke: var(--accent-color);
  }
`;

export const RegisterBtn = styled.button`
  padding: 14px 39px;
  background-color: var(--accent-color);
  border-radius: 12px;

  color: var(--white-text);
  font-family: "Roboto Bold", sans-serif;
  line-height: 1.25;
  transition: all 0.3s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;
