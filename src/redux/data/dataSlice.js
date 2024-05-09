import { createSlice } from "@reduxjs/toolkit";
import { getAllTeachersThunk, getTeachersThunk } from "./operations";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    allTeachers: [],
    teachers: [],
    loadedTeachersCount: 0,
    selectedTeacher: {},
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeSelectedTeacher: (state, { payload }) => {
      state.selectedTeacher = payload;
    },
    incrementLoadedTeachersCount: (state) => {
      state.loadedTeachersCount += 4;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeachersThunk.fulfilled, (state, { payload }) => {
        state.allTeachers = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getAllTeachersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeachersThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getTeachersThunk.fulfilled, (state, { payload }) => {
        state.teachers = [
          ...state.teachers,
          ...payload.filter(
            (teacher) => !state.teachers.find((t) => t.id === teacher.id)
          ),
        ];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getTeachersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachersThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const dataReducer = dataSlice.reducer;
export const { changeSelectedTeacher, incrementLoadedTeachersCount } =
  dataSlice.actions;
