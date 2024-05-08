import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Container from "../../components/Container/Container";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import {
  selectLoadedTeachersCount,
  selectTeachers,
} from "../../redux/selectors";
import { getTeachersThunk } from "../../redux/data/operations";
import { incrementLoadedTeachersCount } from "../../redux/data/dataSlice";
import {
  CardsWrapper,
  LoadMoreBtn,
  SelectWrpr,
  SelectsWrpr,
  StyledSelect,
  TeachersPageWrpr,
} from "./Teachers.styled";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const loadedTeachersCount = useSelector(selectLoadedTeachersCount);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const getLanguages = () => {
    const allLanguages = teachers
      .flatMap((teacher) => teacher.languages)
      .sort((a, b) => a - b);
    return Array.from(new Set(allLanguages));
  };

  const getLevels = () => {
    const allLevels = teachers.flatMap((teacher) => teacher.levels);
    return Array.from(new Set(allLevels));
  };

  const getPrices = () => {
    const prices = [];
    for (let i = 10; i <= 50; i += 10) {
      prices.push(i);
    }
    return prices;
  };

  const onLoadMoreClick = () => {
    dispatch(incrementLoadedTeachersCount());
  };

  const filteredTeachers = teachers.filter((teacher) => {
    let isLanguageMatch = true;
    let isLevelMatch = true;
    let isPriceMatch = true;

    if (selectedLanguage !== "") {
      isLanguageMatch = teacher.languages.includes(selectedLanguage);
    }

    if (selectedLevel !== "") {
      isLevelMatch = teacher.levels.includes(selectedLevel);
    }

    if (selectedPrice !== "") {
      isPriceMatch = teacher.price_per_hour === parseInt(selectedPrice);
    }

    return isLanguageMatch && isLevelMatch && isPriceMatch;
  });

  useEffect(() => {
    dispatch(getTeachersThunk(loadedTeachersCount));
  }, [dispatch, loadedTeachersCount]);

  return (
    <Container>
      <TeachersPageWrpr>
        <SelectsWrpr>
          <SelectWrpr>
            <label htmlFor="languages">Languages</label>
            <StyledSelect
              name="languages"
              id="languages"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {getLanguages().map((language) => (
                <option key={nanoid()} value={language}>
                  {language}
                </option>
              ))}
            </StyledSelect>
          </SelectWrpr>
          <SelectWrpr>
            <label htmlFor="level">Level of knowledge</label>
            <StyledSelect
              name="level"
              id="level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {getLevels().map((level) => (
                <option key={nanoid()} value={level}>
                  {level}
                </option>
              ))}
            </StyledSelect>
          </SelectWrpr>
          <SelectWrpr>
            <label htmlFor="price">Price</label>
            <StyledSelect
              name="price"
              id="price"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              {getPrices().map((price) => (
                <option key={nanoid()} value={price}>
                  {price}
                </option>
              ))}
            </StyledSelect>
          </SelectWrpr>
        </SelectsWrpr>
        <CardsWrapper>
          {filteredTeachers.map(
            ({
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
            }) => (
              <TeacherCard
                key={nanoid()}
                id={id}
                name={name}
                surname={surname}
                languages={languages}
                levels={levels}
                rating={rating}
                reviews={reviews}
                price_per_hour={price_per_hour}
                lessons_done={lessons_done}
                avatar_url={avatar_url}
                lesson_info={lesson_info}
                conditions={conditions}
                experience={experience}
              />
            )
          )}
        </CardsWrapper>
        <LoadMoreBtn onClick={onLoadMoreClick}>Load more</LoadMoreBtn>
      </TeachersPageWrpr>
    </Container>
  );
};

export default Teachers;
