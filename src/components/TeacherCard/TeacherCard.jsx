import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import sprite from "../../assets/sprite.svg";
import {
  BookIcon,
  FullName,
  GrayText,
  IconStatWrpr,
  ImgWrapper,
  InfoWrapper,
  LevelWrpr,
  LevelsWrpr,
  NotFavIcon,
  ShortInfoWrpr,
  StarIcon,
  StatText,
  StatsHeartWrpr,
  TeacherCardWrpr,
  TeacherPhoto,
  TeacherStatsWrpr,
  TopPart,
} from "./TeacherCard.styled";

const TeacherCard = ({
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  avatar_url,
  lesson_info,
  conditions,
  experience,
}) => {
  const [isReadingMore, setIsReadingMore] = useState(false);

  return (
    <TeacherCardWrpr>
      <ImgWrapper>
        <TeacherPhoto
          src={avatar_url}
          alt={name + surname}
          width={96}
          height={96}
        />
        <svg width={12} height={12}>
          <use href={sprite + "#icon-online"}></use>
        </svg>
      </ImgWrapper>
      <InfoWrapper>
        <TopPart>
          <div>
            <GrayText>Languages</GrayText>
            <FullName>{name + " " + surname}</FullName>
          </div>
          <StatsHeartWrpr>
            <TeacherStatsWrpr>
              <IconStatWrpr>
                <BookIcon width={16} height={16}>
                  <use href={sprite + "#icon-book"}></use>
                </BookIcon>
                <StatText>Lessons online</StatText>
              </IconStatWrpr>
              <p>|</p>
              <StatText>Lessons done: {lessons_done}</StatText>
              <p>|</p>
              <IconStatWrpr>
                <StarIcon width={16} height={16}>
                  <use href={sprite + "#icon-star"}></use>
                </StarIcon>
                <StatText>Rating: {rating}</StatText>
              </IconStatWrpr>
              <p>|</p>
              <StatText>
                Price / 1 hour: <span>{price_per_hour}$</span>
              </StatText>
            </TeacherStatsWrpr>
            <NotFavIcon width={26} height={26}>
              <use href={sprite + "#icon-empty-heart"}></use>
            </NotFavIcon>
          </StatsHeartWrpr>
        </TopPart>
        <div>
          <ShortInfoWrpr>
            <p>
              Speaks: <span>{languages.join(", ")}</span>
            </p>
            <p>
              Lesson info: <span>{lesson_info}</span>
            </p>
            <p>
              Conditions: <span>{conditions}</span>
            </p>
          </ShortInfoWrpr>
          {!isReadingMore ? (
            <button onClick={() => setIsReadingMore(true)}>Read more</button>
          ) : (
            <p>{experience}</p>
          )}
        </div>
        {isReadingMore && (
          <div>
            {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
              <div key={nanoid()}>
                <div>
                  <img src="" alt="" />
                  <p>{reviewer_name}</p>
                  <div>
                    <svg width={16} height={16}>
                      <use href={sprite + "#icon-star"}></use>
                    </svg>
                    <p>{reviewer_rating}</p>
                  </div>
                </div>
                <p>{comment}</p>
              </div>
            ))}
          </div>
        )}
        <LevelsWrpr>
          {levels.map((level) => (
            <LevelWrpr key={nanoid()}>
              <p>{level}</p>
            </LevelWrpr>
          ))}
        </LevelsWrpr>
        {isReadingMore && <button>Book trial lesson</button>}
      </InfoWrapper>
    </TeacherCardWrpr>
  );
};

export default TeacherCard;
