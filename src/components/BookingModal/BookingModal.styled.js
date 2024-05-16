import { Radio } from "@mui/material";
import styled from "styled-components";

export const BookingModalWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TitleBooking = styled.h2`
  font-family: "Roboto Medium";
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.05rem;

  @media only screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const SupTextBook = styled.p`
  color: var(--translucent80-text);
  line-height: 1.4;
`;

export const TeacherBookWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding-bottom: 1.25rem;

  img {
    border-radius: 50%;
  }

  @media only screen and (max-width: 767px) {
    gap: 0.5rem;
  }
`;

export const TeacherNameWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    font-family: "Roboto Medium";
  }

  p:first-child {
    color: var(--gray-text);
    font-size: 0.75rem;
    line-height: 1.3;
  }
`;

export const RadiosWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-bottom: 1.25rem;

  h3 {
    font-family: "Roboto Medium";
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;

export const StyledRadio = styled(Radio)`
  &.Mui-checked {
    color: var(--accent-color) !important;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.75rem;
  background-color: var(--accent-color);
  padding: 1rem;

  color: var(--white-text);
  font-family: "Roboto Bold";
  font-size: 1.125rem;
  line-height: 1.6;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;
