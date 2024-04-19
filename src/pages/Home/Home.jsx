import Container from "../../components/Container/Container";
import god from "../../images/Memoji Boys 2-7.png";
import laptop from "../../images/Union.png";
import apple from "../../images/apple.png";
import {
  InfoText,
  InfoWrp,
  MainWrp,
  InfoTitle,
  InfoButton,
  ImgWrp,
  LaptopImg,
  AppleImg,
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
        <InfoWrp>
          <InfoTitle>
            Unlock your potential with the best <span>language</span> tutors
          </InfoTitle>
          <InfoText>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </InfoText>
          <InfoButton>Get started</InfoButton>
        </InfoWrp>
        <ImgWrp>
          <GodImg src={god} alt="God" width={450} />
          <LaptopImg src={laptop} alt="Laptop" />
          <AppleImg src={apple} alt="Apple" />
        </ImgWrp>
      </MainWrp>
      <TutorStatsWrp>
        <OneStatWrp>
          <StatNumber>32,000 +</StatNumber>
          <p>Experienced tutors</p>
        </OneStatWrp>
        <OneStatWrp>
          <StatNumber>300,000 +</StatNumber>
          <p>5-star tutor reviews</p>
        </OneStatWrp>
        <OneStatWrp>
          <StatNumber>120 +</StatNumber>
          <p>Subjects taught</p>
        </OneStatWrp>
        <OneStatWrp>
          <StatNumber>200 +</StatNumber>
          <StatDescr>Tutor nationalities</StatDescr>
        </OneStatWrp>
      </TutorStatsWrp>
    </Container>
  );
};

export default Home;
