import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const LogoWrpr = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 5px;

  border-radius: 12px;

  cursor: pointer;

  p {
    font-family: "Roboto Medium", sans-serif;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.4px;
  }

  &:hover {
    border-width: 2px;
    border-top-color: var(--top-border-flag);
    border-bottom-color: var(--bottom-border-flag);
    border-style: solid none;
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
  transition: all 0.2s;

  &:hover {
    color: var(--accent-color);
    font-weight: 700;
  }

  &.active {
    box-sizing: content-box;
    border-bottom: 5px solid var(--accent-color);
  }
`;

export const UserWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  p {
    font-family: "Roboto Bold";
    font-size: 18px;
  }
`;

export const UserAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;

  transition: all 0.3s;

  use {
    stroke: var(--accent-color);
  }

  &:hover {
    background-color: var(--logout-btn);

    use {
      stroke: var(--white-text);
    }
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

  padding: 10px 2px;

  font-family: "Roboto Bold", sans-serif;
  line-height: 1.25;

  transition: color 0.3s;

  use {
    stroke: var(--accent-color);
  }

  &:hover {
    color: var(--accent-color);
    border-width: 3px;
    border-style: solid none;
    border-color: var(--border-color);

    use {
      stroke: var(--primary-text);
    }
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
