import Container from "../../components/Container/Container";
import {
  ErrorBtn,
  ErrorPageWrpr,
  ErrorText,
  ErrorTitle,
  ErrorType,
} from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <Container>
      <ErrorPageWrpr>
        <ErrorType>404</ErrorType>
        <ErrorTitle>We are sorry, Page not found</ErrorTitle>
        <ErrorText>
          The page you are looking for might have been removed or is temporarily
          unavailable
        </ErrorText>
        <ErrorBtn to={"/"}>Back to Homepage</ErrorBtn>
      </ErrorPageWrpr>
    </Container>
  );
};

export default ErrorPage;
