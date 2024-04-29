import { toggleFavorite } from "./authSlice";

export const toggleFavoriteThunk = (teacher) => (dispatch) => {
  dispatch(toggleFavorite(teacher));
};
