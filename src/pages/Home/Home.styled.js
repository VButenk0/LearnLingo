import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainWrp = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;

  padding-bottom: 1.5rem;

  @media only screen and (max-width: 1439px) {
    flex-direction: column;
    height: 1030px;
  }
`;

export const WelcomeWrp = styled.div`
  display: flex;
  flex-direction: column;

  padding: 6.12rem 4rem;
  width: 55%;
  border-radius: 1.875rem;
  background-color: var(--second-bgclr);
  text-align: left;

  @media only screen and (max-width: 1439px) {
    width: 100%;
    align-items: center;
    padding: 3rem 2rem;
  }
`;

export const WelcomeTitle = styled.h1`
  font-family: "Roboto Medium";
  font-size: 3rem;
  line-height: 1.17;
  letter-spacing: -0.06rem;

  padding-bottom: 2rem;

  span {
    font-family: "Roboto Regular";
    font-style: italic;

    border-radius: 0.5rem;
    background: var(--accent-bg);

    padding: 0 0.5rem;
  }
  @media only screen and (max-width: 1439px) {
    font-size: 2.5rem;
  }
`;

export const WelcomeText = styled.p`
  line-height: 1.38;
  letter-spacing: -0.02rem;
  padding-bottom: 4rem;
`;

export const WelcomeButton = styled(Link)`
  width: fit-content;
  padding: 1rem 5.5rem;

  color: var(--white-text);
  background-color: var(--accent-color);
  border-radius: 0.75rem;

  text-align: center;
  font-size: 1.125rem;
  font-family: "Roboto Bold";

  transition: all 0.3s;

  &:hover {
    color: var(--primary-text);
    background-color: var(--accent-hover);
  }

  @media only screen and (max-width: 767px) {
    padding: 1rem 0;
    width: 100%;
  }
`;

export const ImgWrp = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  overflow: hidden;

  width: 45%;

  border-radius: 1.875rem;
  background-color: var(--accent-bg);

  @media only screen and (max-width: 1439px) {
    width: auto;
    height: 100%;
  }
`;

export const GodImg = styled.img`
  position: absolute;
  top: -1rem;

  width: 28rem;
`;

export const LaptopImg = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;

  box-shadow: 0 -0.375rem 2.5rem 1.25rem #f4ffb6;
  border-radius: 0.625rem;

  img {
    width: 22.5rem;
    height: 11rem;
  }
`;

export const TutorStatsWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 7.69rem;
  margin-bottom: 3rem;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%239B9AE0FF' stroke-width='1.5' stroke-dasharray='15%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  background-position: center;
  border-radius: 1.875rem;

  @media only screen and (max-width: 1439px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3rem;
    padding: 2.5rem 5rem;
  }

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 2.5rem 2rem;
  }
`;

export const OneStatWrp = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StatNumber = styled.p`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  font-family: "Roboto Medium";
  font-size: 1.75rem;
  line-height: 1.14;
  letter-spacing: -0.035rem;
`;

export const StatDescr = styled.p`
  width: 5rem;
  color: var(--translucent-text);
  font-size: 0.875rem;
  line-height: 1.29;
  letter-spacing: -0.0175rem;

  &.shorter {
    width: 4.625rem;
  }
`;
