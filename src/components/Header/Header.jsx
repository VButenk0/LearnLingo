import Logo from "../../images/ukraine.png";
import {
  AuthWrpr,
  HeaderWrpr,
  LogInBtn,
  LogoWrpr,
  NavWrpr,
  RegisterBtn,
  StyledNavLink,
} from "./Header.styled";
import Container from "../Container/Container";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLogInModal,
  changeModalOpen,
  changeRegisterModal,
} from "../../redux/modals/modalsSlice";
import Modal from "../Modal/Modal";
import { selectIsModalOpen } from "../../redux/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);

  const onLogInClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogInModal(true));
    console.log("Натиск на логін");
  };

  const onRegisterClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeRegisterModal(true));
    console.log("Натиск на реєстрацію");
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
        <AuthWrpr>
          <LogInBtn onClick={onLogInClick}>
            <svg width={16} height={16} fill="none">
              <use href={sprite + "#icon-log-in"}></use>
            </svg>
            Log In
          </LogInBtn>
          <RegisterBtn onClick={onRegisterClick}>Registration</RegisterBtn>
        </AuthWrpr>
      </HeaderWrpr>
      {modalIsOpen && <Modal />}
    </Container>
  );
};

export default Header;
