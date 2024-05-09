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

export const SelectWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: var(--gray-text);
    font-family: "Roboto Medium";
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const StyledSelect = styled.select`
  &#languages {
    width: 221px;
  }

  &#level {
    width: 198px;
  }

  &#price {
    width: 124px;
  }

  padding: 16px 70px 16px 18px;
  border: 3px solid var(--border-color);
  border-radius: 14px;
  outline: none;

  font-family: "Roboto Medium";
  font-size: 18px;
  line-height: 1.1;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: transparent;
  background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="%23121417" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-position: right 14px center;

  option {
    color: var(--translucent20-text);
    font-family: "Roboto Medium";
    font-size: 18px;
    line-height: 1.1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:active {
      color: var(--primary-text);
    }
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
