import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import sprite from "../../assets/sprite.svg";
import { changeSelectedTeacher } from "../../redux/data/dataSlice";
import {
  changeBookingModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import {
  BookIcon,
  BookingBtn,
  FullName,
  GrayText,
  IconStatWrpr,
  ImgWrapper,
  InfoWrapper,
  LevelWrpr,
  LevelsWrpr,
  NotFavIcon,
  ReadMoreBtn,
  ReviewComment,
  ReviewRate,
  ReviewerWrpr,
  ReviewsWrpr,
  SeparatorIcon,
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
  const dispatch = useDispatch();
  const [isReadingMore, setIsReadingMore] = useState(false);

  const onBookingClick = () => {
    dispatch(changeSelectedTeacher({ name, surname, avatar_url }));
    dispatch(changeModalOpen(true));
    dispatch(changeBookingModal(true));
  };

  return (
    <TeacherCardWrpr>
      <ImgWrapper>
        <TeacherPhoto
          src={avatar_url}
          alt={name + " " + surname}
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
              <SeparatorIcon width={2} height={16} fill="none">
                <use href={sprite + "#icon-separator"}></use>
              </SeparatorIcon>
              <StatText>Lessons done: {lessons_done}</StatText>
              <SeparatorIcon width={2} height={16} fill="none">
                <use href={sprite + "#icon-separator"}></use>
              </SeparatorIcon>
              <IconStatWrpr>
                <StarIcon width={16} height={16}>
                  <use href={sprite + "#icon-star"}></use>
                </StarIcon>
                <StatText>Rating: {rating}</StatText>
              </IconStatWrpr>
              <SeparatorIcon width={2} height={16} fill="none">
                <use href={sprite + "#icon-separator"}></use>
              </SeparatorIcon>
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
            <ReadMoreBtn onClick={() => setIsReadingMore(true)}>
              Read more
            </ReadMoreBtn>
          ) : (
            <p>{experience}</p>
          )}
        </div>
        {isReadingMore && (
          <ReviewsWrpr>
            {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
              <div key={nanoid()}>
                <ReviewerWrpr>
                  {/* <img src="" alt={reviewer_name}'s Avatar /> */}
                  {/* <div> */}
                  <GrayText className="review">{reviewer_name}</GrayText>
                  <ReviewRate>
                    <StarIcon width={16} height={16}>
                      <use href={sprite + "#icon-star"}></use>
                    </StarIcon>
                    <p>{reviewer_rating}.0</p>
                  </ReviewRate>
                  {/* </div> */}
                </ReviewerWrpr>
                <ReviewComment>{comment}</ReviewComment>
              </div>
            ))}
          </ReviewsWrpr>
        )}
        <LevelsWrpr>
          {levels.map((level) => (
            <LevelWrpr key={nanoid()}>
              <p>{level}</p>
            </LevelWrpr>
          ))}
        </LevelsWrpr>
        {isReadingMore && (
          <BookingBtn onClick={onBookingClick}>Book trial lesson</BookingBtn>
        )}
      </InfoWrapper>
    </TeacherCardWrpr>
  );
};

export default TeacherCard;
