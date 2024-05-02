import { useDispatch, useSelector } from "react-redux";
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
  StyledNavLink,
  UserAvatar,
  UserWrpr,
} from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);

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
          <p>LearnLingo</p>
        </LogoWrpr>
        <NavWrpr>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/teachers">Teachers</StyledNavLink>
          {isLoggedIn && (
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          )}
        </NavWrpr>
        {isLoggedIn ? (
          <UserWrpr>
            <p>{user.username}</p>
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
            <RegisterBtn onClick={onRegisterClick}>Registration</RegisterBtn>
          </AuthWrpr>
        )}
      </HeaderWrpr>
      {modalIsOpen && <Modal />}
    </Container>
  );
};

export default Header;
