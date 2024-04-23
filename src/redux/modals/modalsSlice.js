import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    isModalOpen: false,
  },

  reducers: {},
});

export const modalsReducer = modalsSlice.reducer;
