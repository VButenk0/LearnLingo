import { createSlice } from "@reduxjs/toolkit";
// import { fetchTeachersThunk } from "./operations";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    teachers: [],
    selectedTeacher: {},
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeSelectedTeacher: (state, { payload }) => {
      state.selectedTeacher = payload;
    },
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(fetchTeachersThunk.fulfilled, (state, { payload }) => {
    //   state.teachers = payload;
    //   state.isLoading = false;
    //   state.isError = false;
    // })
    // .addCase(fetchTeachersThunk.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(fetchTeachersThunk.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isError = payload;
    // });
  },
});

export const dataReducer = dataSlice.reducer;
export const { changeSelectedTeacher } = dataSlice.actions;
