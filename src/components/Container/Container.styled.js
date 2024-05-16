import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 4rem;
  margin: 0 auto;

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 1.5rem;
  }
`;
