import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    teachers: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const dataReducer = dataSlice.reducer;
