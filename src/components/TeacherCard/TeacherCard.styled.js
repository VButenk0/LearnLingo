import styled from "styled-components";

export const TeacherCardWrpr = styled.div`
  display: flex;
  gap: 3rem;
  padding: 1.5rem;

  border: 0.1875rem solid var(--border-color);
  border-radius: 1.875rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  width: 7.5rem;
  height: 7.5rem;

  border-radius: 50%;
  border: 0.1875rem solid var(--border-color);

  position: relative;

  svg {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
  }
`;

export const TeacherPhoto = styled.img`
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
    padding-bottom: 0.5rem;
  }

  &.review {
    padding-bottom: 0.125rem;
  }
`;

export const FullName = styled.p`
  font-family: "Roboto Medium";
  font-size: 1.5rem;
  line-height: 1;
`;

export const StatsHeartWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const TeacherStatsWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  gap: 0.5rem;
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
    box-shadow: 0.1875rem 0.1875rem 0.3125rem 0.3125rem var(--accent-bg);
  }
`;

export const SeparatorIcon = styled.svg`
  stroke-width: 0.0625rem;
  stroke: var(--translucent20-text);
`;

export const ShortInfoWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-bottom: 1rem;

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
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: underline;
`;

export const LevelsWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LevelWrpr = styled.div`
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--translucent-border);
  border-radius: 2.1875rem;

  font-family: "Roboto Medium";
  font-size: 0.875rem;
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
  gap: 2rem;
`;

export const ReviewerWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  /* img {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
  } */
`;

export const ReviewRate = styled.div`
  display: flex;
  gap: 0.5rem;
  p {
    font-family: "Roboto Medium";
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;

export const ReviewComment = styled.p`
  font-family: "Roboto Medium";
`;

export const BookingBtn = styled.button`
  width: fit-content;
  background-color: var(--accent-color);
  border-radius: 0.75rem;
  padding: 1rem 3rem;

  color: var(--white-text);
  font-family: "Roboto Bold";
  font-size: 1.125rem;
  line-height: 1.6;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;
