import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      name: "",
      favorites: [],
    },
    token: "",
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },

  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const authReducer = authSlice.reducer;
