import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainWrp = styled.div`
  display: flex;
  width: 100%;
  height: 530px;
  gap: 24px;

  padding-bottom: 24px;
`;

export const WelcomeWrp = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;

  padding: 98px 64px;
  width: 720px;
  height: 100%;
  border-radius: 30px;
  background-color: var(--second-bgclr);
  text-align: left;
`;

export const WelcomeTitle = styled.h1`
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
    background: var(--accent-bg);

    padding: 0 5px;
  }
`;

export const WelcomeText = styled.p`
  width: 471px;
  line-height: 1.4;
  letter-spacing: -0.32px;
  padding-bottom: 64px;
`;

export const WelcomeButton = styled(Link)`
  width: fit-content;
  padding: 16px 88px;

  color: var(--white-text);
  background-color: var(--accent-color);
  border-radius: 12px;

  font-size: 18px;
  font-family: "Roboto Bold";

  transition: all 0.3s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }
`;

export const ImgWrp = styled.div`
  position: relative;
  flex-shrink: 0;
  align-items: end;
  overflow: hidden;

  width: 568px;
  height: 100%;

  border-radius: 30px;
  background-color: var(--accent-bg);
`;

export const GodImg = styled.img`
  position: absolute;
  top: -20px;
  left: 50px;
`;

export const LaptopImg = styled.div`
  position: absolute;
  left: 104px;
  bottom: 0;

  box-shadow: 0 -6px 40px 20px #f4ffb6;
  border-radius: 10px;
`;

export const AppleImg = styled.img`
  position: absolute;
  left: 260px;
  bottom: 55px;
`;

export const TutorStatsWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;

  padding: 40px 122px;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%239B9AE0FF' stroke-width='1.5' stroke-dasharray='15%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  background-position: center;
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

  color: var(--translucent-text);
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.28px;

  &.shorter {
    width: 74px;
  }
`;
