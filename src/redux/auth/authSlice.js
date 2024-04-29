import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      name: "",
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    token: "",
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },

  reducers: {
    toggleFavorite: (state, { payload }) => {
      const existingIndex = state.user.favorites.findIndex(
        (fav) => fav.id === payload.id
      );

      if (existingIndex !== -1) {
        state.user.favorites = state.user.favorites.filter(
          (fav) => fav.id !== payload.id
        );
      } else {
        state.user.favorites.push(payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.user.favorites));
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const { toggleFavorite } = authSlice.actions;
export const authReducer = authSlice.reducer;
