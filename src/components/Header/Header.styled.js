import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 4rem;

  @media only screen and (max-width: 500px) {
    justify-content: space-around;
    padding: 1.25rem 0;
  }
`;

export const LogoWrpr = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.3125rem;

  border-width: 2px;
  border-color: transparent;
  border-style: solid none;
  border-radius: 0.75rem;

  cursor: pointer;

  transition: all 0.3s;

  p {
    font-family: "Roboto Medium", sans-serif;
    font-size: 1.25rem;
    line-height: 1.2;
    letter-spacing: -0.025rem;
  }

  &:hover {
    border-top-color: var(--top-border-flag);
    border-bottom-color: var(--bottom-border-flag);
  }
`;

export const NavWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  justify-content: center;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
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

export const StyledBurger = styled.div`
  width: 30px;
  height: 22.5px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: var(--accent-color);
    border-radius: 4.5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 9px;
  }
  span:nth-child(4) {
    top: 18px;
  }
  &.open span:nth-child(1) {
    top: 9px;
    width: 0%;
    left: 50%;
  }
  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &.open span:nth-child(4) {
    top: 9px;
    width: 0%;
    left: 50%;
  }
`;

export const UserWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.3125rem 0.625rem;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  p {
    font-family: "Roboto Bold";
    font-size: 1.125rem;
  }
`;

export const UserAvatar = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem;
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
  gap: 1rem;
`;

export const LogInBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.625rem 0.125rem;

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
  padding: 0.875rem 2.4375rem;
  background-color: var(--accent-color);
  border-radius: 0.75rem;

  color: var(--white-text);
  font-family: "Roboto Bold", sans-serif;
  line-height: 1.25;
  transition: all 0.3s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
  @media only screen and (max-width: 767px) {
    padding: 0.5rem 1.5rem;
  }
`;
