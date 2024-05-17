import Container from "../../components/Container/Container";
import god from "../../images/Memoji Boys 2-7.png";
import laptop from "../../images/Union.png";
import {
  WelcomeText,
  WelcomeWrp,
  MainWrp,
  WelcomeTitle,
  WelcomeButton,
  ImgWrp,
  LaptopImg,
  GodImg,
  TutorStatsWrp,
  OneStatWrp,
  StatNumber,
  StatDescr,
} from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <MainWrp>
        <WelcomeWrp>
          <WelcomeTitle>
            Unlock your potential with the best <span>language</span> tutors
          </WelcomeTitle>
          <WelcomeText>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </WelcomeText>
          <WelcomeButton to={"/teachers"}>Get started</WelcomeButton>
        </WelcomeWrp>
        <ImgWrp>
          <GodImg src={god} alt="God" />
          <LaptopImg>
            <img src={laptop} alt="Laptop" />
          </LaptopImg>
        </ImgWrp>
      </MainWrp>
      <TutorStatsWrp>
        <OneStatWrp>
          <StatNumber>32,000 +</StatNumber>
          <StatDescr>Experienced tutors</StatDescr>
        </OneStatWrp>
        <OneStatWrp>
          <StatNumber>300,000 +</StatNumber>
          <StatDescr>5-star tutor reviews</StatDescr>
        </OneStatWrp>
        <OneStatWrp>
          <StatNumber>120 +</StatNumber>
          <StatDescr className="shorter">Subjects taught</StatDescr>
        </OneStatWrp>
        <OneStatWrp>
          <StatNumber>200 +</StatNumber>
          <StatDescr className="shorter">Tutor nationalities</StatDescr>
        </OneStatWrp>
      </TutorStatsWrp>
    </Container>
  );
};

export default Home;
