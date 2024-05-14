import { InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export const TeachersPageWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 96px;
`;

export const SelectsWrpr = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLabel = styled(InputLabel)`
  color: var(--gray-text) !important;
  font-family: "Roboto Medium" !important;
  font-size: 14px;
  line-height: 1.3;
`;

export const StyledSelect = styled(Select)`
  border-radius: 14px;
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
  font-size: 18px !important;
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
  gap: 32px;
`;

export const LoadMoreBtn = styled.button`
  width: fit-content;
  padding: 16px 48px;
  margin: 0 auto;

  color: var(--white-text);
  background-color: var(--accent-color);
  border-radius: 12px;

  font-family: "Roboto Bold";
  font-size: 18px;
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
  font-size: 36px;
  padding: 50px;
  text-align: center;
`;
