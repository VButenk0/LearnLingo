import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import sprite from "../../assets/sprite.svg";
import { changeSelectedTeacher } from "../../redux/data/dataSlice";
import {
  changeBookingModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { toggleFavoriteThunk } from "../../redux/auth/operations";
import { selectFavorites, selectIsLogged } from "../../redux/selectors";
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
  FavIcon,
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
  NameWrpr,
} from "./TeacherCard.styled";

const TeacherCard = ({
  id,
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
  selectedLevel,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLogged = useSelector(selectIsLogged);
  const [isReadingMore, setIsReadingMore] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const onBookingClick = () => {
    dispatch(changeSelectedTeacher({ name, surname, avatar_url }));
    dispatch(changeModalOpen(true));
    dispatch(changeBookingModal(true));
  };

  const onHeartClick = (teacher) => {
    if (isLogged) {
      dispatch(toggleFavoriteThunk(teacher));
    } else {
      toast.info("Favorites access only for logged users");
    }
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
          <NameWrpr>
            <GrayText>Languages</GrayText>
            <FullName>{name + " " + surname}</FullName>
          </NameWrpr>
          <StatsHeartWrpr>
            <TeacherStatsWrpr>
              <IconStatWrpr>
                <BookIcon width={16} height={16}>
                  <use href={sprite + "#icon-book"}></use>
                </BookIcon>
                <StatText>Lessons online</StatText>
              </IconStatWrpr>
              {!isMobile && (
                <SeparatorIcon width={2} height={16} fill="none">
                  <use href={sprite + "#icon-separator"}></use>
                </SeparatorIcon>
              )}
              <StatText>Lessons done: {lessons_done}</StatText>
              {!isMobile && (
                <SeparatorIcon width={2} height={16} fill="none">
                  <use href={sprite + "#icon-separator"}></use>
                </SeparatorIcon>
              )}
              <IconStatWrpr>
                <StarIcon width={16} height={16}>
                  <use href={sprite + "#icon-star"}></use>
                </StarIcon>
                <StatText>Rating: {rating}</StatText>
              </IconStatWrpr>
              {!isMobile && (
                <SeparatorIcon width={2} height={16} fill="none">
                  <use href={sprite + "#icon-separator"}></use>
                </SeparatorIcon>
              )}
              <StatText>
                Price / 1 hour: <span>{price_per_hour}$</span>
              </StatText>
            </TeacherStatsWrpr>
            <FavIcon
              onClick={() =>
                onHeartClick({
                  id,
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
                })
              }
              className={
                favorites?.some((favorite) => favorite.id === id)
                  ? "full"
                  : "empty"
              }
              width={26}
              height={26}
            >
              <use
                href={
                  sprite +
                  `#icon-heart-${
                    favorites?.some((favorite) => favorite.id === id)
                      ? "full"
                      : "empty"
                  }`
                }
              ></use>
            </FavIcon>
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
                  <GrayText className="review">{reviewer_name}</GrayText>
                  <ReviewRate>
                    <StarIcon width={16} height={16}>
                      <use href={sprite + "#icon-star"}></use>
                    </StarIcon>
                    <p>{reviewer_rating}.0</p>
                  </ReviewRate>
                </ReviewerWrpr>
                <ReviewComment>{comment}</ReviewComment>
              </div>
            ))}
          </ReviewsWrpr>
        )}
        <LevelsWrpr>
          {levels.map((level) => (
            <LevelWrpr
              key={nanoid()}
              className={level === selectedLevel ? "selected" : ""}
            >
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
