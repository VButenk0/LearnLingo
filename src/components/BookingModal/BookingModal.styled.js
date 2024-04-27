import { Radio } from "@mui/material";
import styled from "styled-components";

export const BookingModalWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleBooking = styled.h2`
  font-family: "Roboto Medium";
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const SupTextBook = styled.p`
  color: var(--translucent80-text);
  line-height: 1.4;
`;

export const TeacherBookWrpr = styled.div`
  display: flex;
  gap: 14px;
  padding-bottom: 20px;

  img {
    border-radius: 50%;
  }
`;

export const TeacherNameWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-family: "Roboto Medium";
  }

  p:first-child {
    color: var(--gray-text);
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const RadiosWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;

  h3 {
    font-family: "Roboto Medium";
    font-size: 24px;
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

  border-radius: 12px;
  background-color: var(--accent-color);
  padding: 16px;

  color: var(--white-text);
  font-family: "Roboto Bold";
  font-size: 18px;
  line-height: 1.6;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;
