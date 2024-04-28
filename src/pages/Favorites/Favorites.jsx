import { nanoid } from "@reduxjs/toolkit";
import Container from "../../components/Container/Container";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { CardsWrapper } from "../Teachers/Teachers.styled";
import { selectFavorites } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length !== 0 ? (
        <CardsWrapper>
          {favorites.map(
            ({
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
      ) : (
        <div>
          <p>No favorites yet</p>
        </div>
      )}
    </Container>
  );
};

export default Favorites;
