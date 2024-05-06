import { Ball1, Ball2, Spinner, SpinnerContainer } from "./Loader.styled";

const Loader = () => (
  <SpinnerContainer>
    <Spinner>
      <Ball1 />
      <Ball2 />
    </Spinner>
  </SpinnerContainer>
);

export default Loader;
