import styled from "styled-components";

export const MainWrp = styled.div`
  display: flex;
  width: 100%;
  height: 530px;
  gap: 24px;

  padding-bottom: 24px;
`;

export const InfoWrp = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;

  padding: 98px 64px;
  width: 720px;
  height: 100%;
  border-radius: 30px;
  background-color: #f8f8f8;
  text-align: left;
`;

export const InfoTitle = styled.h1`
  width: 548px;

  font-family: "Roboto Medium";
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.96px;

  padding-bottom: 32px;

  span {
    font-family: "Roboto Regular";
    font-style: italic;

    border-radius: 8px;
    background: #c1bdf2;

    padding: 0 5px;
  }
`;

export const InfoText = styled.p`
  width: 471px;
  font-family: "Roboto Regular";
  line-height: 1.4;
  letter-spacing: -0.32px;
  padding-bottom: 64px;
`;

export const InfoButton = styled.button`
  width: fit-content;
  padding: 16px 88px;

  color: var(--white-text);
  background-color: var(--accent-color);
  border-radius: 12px;

  font-size: 18px;
  font-family: "Roboto Bold";

  transition: all 0.5s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;

export const ImgWrp = styled.div`
  position: relative;
  flex-shrink: 0;
  align-items: end;

  width: 568px;
  height: 100%;

  border-radius: 30px;
  background-color: #c1bdf2;
`;

export const GodImg = styled.img`
  position: absolute;
  top: -20px;
  left: 50px;
`;

export const LaptopImg = styled.img`
  position: absolute;
  left: 104px;
  bottom: 0;
`;

export const AppleImg = styled.img`
  position: absolute;
  left: 260px;
  bottom: 55px;
`;

export const TutorStatsWrp = styled.div`
  display: flex;
  gap: 100px;

  padding: 40px 122px;

  border: 3px dashed #9b9ae0;
  border-radius: 30px;
`;

export const OneStatWrp = styled.div`
  display: flex;
  gap: 16px;
`;

export const StatNumber = styled.p`
  font-family: "Roboto Medium";
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const StatDescr = styled.p`
  width: 96px;

  color: rgba(18, 20, 23, 0.7);
  font-family: "Roboto Regular";
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.28px;

  &.shorter {
    width: 74px;
  }
`;
