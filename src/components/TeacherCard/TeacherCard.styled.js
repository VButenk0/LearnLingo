import styled from "styled-components";

export const TeacherCardWrpr = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;

  border: 3px solid var(--border-color);
  border-radius: 30px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  width: 120px;
  height: 120px;

  border-radius: 50%;
  border: 3px solid var(--border-color);

  position: relative;

  svg {
    position: absolute;
    top: 16px;
    right: 20px;
  }
`;

export const TeacherPhoto = styled.img`
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const GrayText = styled.p`
  color: var(--gray-text);
  font-family: "Roboto Medium";

  &:first-of-type {
    padding-bottom: 8px;
  }

  &.review {
    padding-bottom: 2px;
  }
`;

export const FullName = styled.p`
  font-family: "Roboto Medium";
  font-size: 24px;
  line-height: 1;
`;

export const StatsHeartWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`;

export const TeacherStatsWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StatText = styled.p`
  font-family: "Roboto Medium";
  line-height: 1.5;

  span {
    color: var(--price-color);
  }
`;

export const IconStatWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BookIcon = styled.svg`
  fill: none;
  stroke: var(--primary-text);
`;

export const StarIcon = styled.svg`
  fill: var(--star-color);
`;

export const FavIcon = styled.svg`
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &.full {
    fill: var(--accent-color);
    stroke: var(--accent-color);
  }
  &.empty {
    fill: none;
    stroke: var(--primary-text);
  }

  &:hover > use {
    box-shadow: 3px 3px 5px 5px var(--accent-bg);
  }
`;

export const SeparatorIcon = styled.svg`
  stroke-width: 1px;
  stroke: var(--translucent20-text);
`;

export const ShortInfoWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-bottom: 16px;

  color: var(--gray-text);
  font-family: "Roboto Medium";
  line-height: 1.5;

  span {
    color: var(--primary-text);
  }
  & p:first-of-type span {
    text-decoration: underline;
  }
`;

export const ReadMoreBtn = styled.button`
  font-family: "Roboto Medium";
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
`;

export const LevelsWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LevelWrpr = styled.div`
  padding: 8px 12px;
  border: 1px solid var(--translucent-border);
  border-radius: 35px;

  font-family: "Roboto Medium";
  font-size: 14px;
  line-height: 1.4;

  &.selected {
    color: var(--white-text);
    background-color: var(--accent-color);
    border: none;
  }
`;

export const ReviewsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ReviewerWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  /* img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  } */
`;

export const ReviewRate = styled.div`
  display: flex;
  gap: 8px;
  p {
    font-family: "Roboto Medium";
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const ReviewComment = styled.p`
  font-family: "Roboto Medium";
`;

export const BookingBtn = styled.button`
  width: fit-content;
  background-color: var(--accent-color);
  border-radius: 12px;
  padding: 16px 48px;

  color: var(--white-text);
  font-family: "Roboto Bold";
  font-size: 18px;
  line-height: 1.6;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;
