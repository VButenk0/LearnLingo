import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { Button, Menu, MenuItem } from "@mui/material";
import sprite from "../../assets/sprite.svg";
import Logo from "../../images/ukraine.png";
import DefaultAvatar from "../../images/defaultAvatar.jpg";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import {
  changeLogInModal,
  changeLogoutModal,
  changeModalOpen,
  changeRegisterModal,
} from "../../redux/modals/modalsSlice";
import {
  selectIsLogged,
  selectIsModalOpen,
  selectUser,
} from "../../redux/selectors";
import {
  AuthWrpr,
  HeaderWrpr,
  LogInBtn,
  LogoWrpr,
  LogoutBtn,
  NavWrpr,
  RegisterBtn,
  StyledBurger,
  StyledNavLink,
  UserAvatar,
  UserWrpr,
} from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogOutClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogoutModal(true));
  };

  const onLogInClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogInModal(true));
  };

  const onRegisterClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeRegisterModal(true));
  };

  return (
    <Container>
      <HeaderWrpr>
        <LogoWrpr to={"/"}>
          <img src={Logo} alt="Logo" />
          {isMobile ? <p>LL</p> : <p>LearnLingo</p>}
        </LogoWrpr>
        {isDesktop ? (
          <NavWrpr>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/teachers">Teachers</StyledNavLink>
            {isLoggedIn && (
              <StyledNavLink to="/favorites">Favorites</StyledNavLink>
            )}
          </NavWrpr>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Button
              id="burger"
              aria-controls={anchorEl ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              onClick={handleClick}
            >
              <StyledBurger className={anchorEl ? "open" : ""}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </StyledBurger>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleClose}>
                <StyledNavLink to="/">Home</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <StyledNavLink to="/teachers">Teachers</StyledNavLink>
              </MenuItem>
              {isLoggedIn && (
                <MenuItem onClick={handleClose}>
                  <StyledNavLink to="/favorites">Favorites</StyledNavLink>
                </MenuItem>
              )}
            </Menu>
          </div>
        )}
        {isLoggedIn ? (
          <UserWrpr>
            {!isMobile && <p>{user.username}</p>}
            <UserAvatar
              src={user.avatar ? "*" : DefaultAvatar}
              alt="User Avatar"
            />
            <LogoutBtn onClick={onLogOutClick}>
              <svg width={16} height={16} fill="none">
                <use href={sprite + "#icon-logout"}></use>
              </svg>
            </LogoutBtn>
          </UserWrpr>
        ) : (
          <AuthWrpr>
            <LogInBtn onClick={onLogInClick}>
              <svg width={16} height={16} fill="none">
                <use href={sprite + "#icon-log-in"}></use>
              </svg>
              Log In
            </LogInBtn>
            <RegisterBtn onClick={onRegisterClick}>
              {isMobile ? "Sign Up" : "Registration"}
            </RegisterBtn>
          </AuthWrpr>
        )}
      </HeaderWrpr>
      {modalIsOpen && <Modal />}
    </Container>
  );
};

export default Header;
