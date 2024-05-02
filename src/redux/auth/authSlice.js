import { createAction, createSlice } from "@reduxjs/toolkit";
import {
  refreshThunk,
  signInThunk,
  signUpThunk,
  logoutThunk,
} from "./operations.js";

export const updateUserFromLookupResponse = createAction(
  "auth/updateUserFromLookupResponse"
);

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
      .addCase(updateUserFromLookupResponse, (state, action) => {
        const { token, email, username } = action.payload;
        state.token = token;
        state.user.email = email;
        state.user.username = username;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        const { token, email, username } = payload;
        state.token = token;
        state.user.email = email;
        state.user.username = username;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        const { token, email, username } = payload;
        state.token = token;
        state.user.email = email;
        state.user.username = username;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        const { token, email, username } = payload;
        state.token = token;
        state.user.email = email;
        state.user.username = username;
        state.isLogged = true;
        state.isLoading = false;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLogged = true;
        state.isLoading = true;
        state.isRefresh = true;
        state.isError = null;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isRefresh = false;
        state.isError = payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.token = "";
        state.user.email = "";
        state.user.username = "";
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isLogged = true;
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { toggleFavorite } = authSlice.actions;
export const authReducer = authSlice.reducer;
