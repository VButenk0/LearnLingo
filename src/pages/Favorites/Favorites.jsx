import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Container from "../../components/Container/Container";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { selectFavorites } from "../../redux/selectors";
import { CardsWrapper } from "../Teachers/Teachers.styled";
import { FavoritesWrpr } from "./Favorites.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <FavoritesWrpr>
        {favorites?.length ? (
          <CardsWrapper>
            {favorites?.map(
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
        ) : (
          <div>
            <p>No favorites yet</p>
          </div>
        )}
      </FavoritesWrpr>
    </Container>
  );
};

export default Favorites;
