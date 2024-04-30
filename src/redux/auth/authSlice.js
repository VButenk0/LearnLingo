import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "./operations.js";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      username: "",
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

  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        const { token, email, username } = payload;
        state.token = token;
        state.user.email = email;
        state.user.username = username;
        state.isLogged = true;
        state.isLoading = false;
        console.log("Реєстрація пройшла успішно (log слайсу)");
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLogged = true;
        const { token, email, username } = payload;
        state.user.email = email;
        state.user.username = username;
        state.token = token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { toggleFavorite } = authSlice.actions;
export const authReducer = authSlice.reducer;
