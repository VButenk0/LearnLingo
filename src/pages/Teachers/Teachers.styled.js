import { InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export const TeachersPageWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 6rem;
`;

export const SelectsWrpr = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const StyledLabel = styled(InputLabel)`
  color: var(--gray-text) !important;
  font-family: "Roboto Medium" !important;
  font-size: 0.875rem;
  line-height: 1.3;
`;

export const StyledSelect = styled(Select)`
  border-radius: 0.875rem;
  outline: none;

  & .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color) !important;
  }

  font-family: "Roboto Medium" !important;
  line-height: 1.1;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: var(--translucent20-text) !important;
  font-family: "Roboto Medium" !important;
  font-size: 1.125rem !important;
  line-height: 1.1;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.Mui-selected {
    color: var(--primary-text) !important;
    background-color: transparent !important;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LoadMoreBtn = styled.button`
  width: fit-content;
  padding: 1rem 3rem;
  margin: 0 auto;

  color: var(--white-text);
  background-color: var(--accent-color);
  border-radius: 0.75rem;

  font-family: "Roboto Bold";
  font-size: 1.125rem;
  line-height: 1.6;

  transition: all 0.3s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;

export const NoSuchTeachers = styled.p`
  width: 65%;
  margin: 0 auto;

  font-family: "Roboto Regular";
  font-size: 2.25rem;
  padding: 3.125rem;
  text-align: center;
`;
