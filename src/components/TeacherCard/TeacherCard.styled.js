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
  color: #8a8a89;
  font-family: "Roboto Medium", sans-serif;
  line-height: 1.5;
  padding-bottom: 8px;
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
    color: #38cd3e;
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
  fill: #ffc531;
`;

export const NotFavIcon = styled.svg`
  fill: none;
  stroke: var(--primary-text);
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

  /* &.active */
  &:first-of-type {
    color: var(--white-text);
    background-color: var(--accent-color);
    border: none;
  }
`;
