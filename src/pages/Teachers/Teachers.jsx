import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Container from "../../components/Container/Container";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import {
  selectAllTeachers,
  selectLoadedTeachersCount,
  selectTeachers,
} from "../../redux/selectors";
import {
  getAllTeachersThunk,
  getTeachersThunk,
} from "../../redux/data/operations";
import { incrementLoadedTeachersCount } from "../../redux/data/dataSlice";
import {
  CardsWrapper,
  LoadMoreBtn,
  SelectsWrpr,
  TeachersPageWrpr,
} from "./Teachers.styled";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Teachers = () => {
  const dispatch = useDispatch();
  const allTeachers = useSelector(selectAllTeachers);
  const teachers = useSelector(selectTeachers);
  const loadedTeachersCount = useSelector(selectLoadedTeachersCount);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const getLanguages = () => {
    const allLanguages = allTeachers
      .flatMap((teacher) => teacher.languages)
      .sort((a, b) => a - b);
    return Array.from(new Set(allLanguages));
  };

  const getLevels = () => {
    const allLevels = allTeachers.flatMap((teacher) => teacher.levels);
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

  const filteredTeachers = allTeachers.filter((teacher) => {
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
      isPriceMatch = teacher.price_per_hour >= parseInt(selectedPrice);
    }

    return isLanguageMatch && isLevelMatch && isPriceMatch;
  });

  console.log(filteredTeachers);

  useEffect(() => {
    dispatch(getAllTeachersThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTeachersThunk(loadedTeachersCount));
  }, [dispatch, loadedTeachersCount]);

  return (
    <Container>
      <TeachersPageWrpr>
        <SelectsWrpr>
          <FormControl>
            <InputLabel id="language">Languages</InputLabel>
            <Select
              labelId="language"
              id="language"
              value={selectedLanguage}
              label="Languages"
              onChange={(e) => setSelectedLanguage(e.target.value)}
              sx={{ width: 222, borderRadius: 4 }}
            >
              <MenuItem value="">None</MenuItem>
              {getLanguages().map((language) => (
                <MenuItem key={nanoid()} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="level">Level of knowledge</InputLabel>
            <Select
              labelId="level"
              id="level"
              value={selectedLevel}
              label="Level of knowledge"
              onChange={(e) => setSelectedLevel(e.target.value)}
              sx={{ width: 222, borderRadius: 4 }}
            >
              <MenuItem value="">None</MenuItem>
              {getLevels().map((level) => (
                <MenuItem key={nanoid()} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="price">Price</InputLabel>
            <Select
              labelId="price"
              id="price"
              value={selectedPrice}
              label="Price"
              onChange={(e) => setSelectedPrice(e.target.value)}
              sx={{ width: 124, borderRadius: 4, color: "var(--border-color)" }}
            >
              <MenuItem value="">None</MenuItem>
              {getPrices().map((price) => (
                <MenuItem key={nanoid()} value={price}>
                  {price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </SelectsWrpr>
        <CardsWrapper>
          {(filteredTeachers.length < allTeachers.length
            ? filteredTeachers
            : teachers
          ).map(
            (
              {
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
              },
              selectedLevel
            ) => (
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
                selectedLevel={selectedLevel}
              />
            )
          )}
        </CardsWrapper>
        {filteredTeachers.length >= allTeachers.length && (
          <LoadMoreBtn onClick={onLoadMoreClick}>Load more</LoadMoreBtn>
        )}
      </TeachersPageWrpr>
    </Container>
  );
};

export default Teachers;
