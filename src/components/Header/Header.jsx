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

const Header = () => {
  return (
    <Container>
      <HeaderWrpr>
        <LogoWrpr>
          <img src={Logo} alt="Logo" />
          <p>LearnLingo</p>
        </LogoWrpr>
        <NavWrpr>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/teachers">Teachers</StyledNavLink>
        </NavWrpr>
        <AuthWrpr>
          <LogInBtn>
            <svg width={16} height={16}>
              <use href={sprite + "#icon-online"}></use>
            </svg>
            Log In
          </LogInBtn>
          <RegisterBtn>Registration</RegisterBtn>
        </AuthWrpr>
      </HeaderWrpr>
    </Container>
  );
};

export default Header;
