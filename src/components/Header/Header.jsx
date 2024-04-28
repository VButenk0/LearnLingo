import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import Logo from "../../images/ukraine.png";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import Favorites from "../../pages/Favorites/Favorites";
import {
  changeLogInModal,
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
  NavWrpr,
  RegisterBtn,
  StyledNavLink,
} from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);

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
        </NavWrpr>
        {isLoggedIn ? (
          <div>
            <Favorites />
            <div>
              <p>{user.name}</p>
              {user.avatar ? (
                <img src="" alt="User Avatar" />
              ) : (
                <img src="" alt="Default Avatar" />
              )}
            </div>
          </div>
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
