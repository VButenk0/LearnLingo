import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    isModalOpen: false,
    logInModal: false,
    registerModal: false,
    logoutModal: false,
    bookingModal: false,
  },

  reducers: {
    changeModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    changeLogInModal: (state, { payload }) => {
      state.logInModal = payload;
    },
    changeRegisterModal: (state, { payload }) => {
      state.registerModal = payload;
    },
    changeLogoutModal: (state, { payload }) => {
      state.logoutModal = payload;
    },
    changeBookingModal: (state, { payload }) => {
      state.bookingModal = payload;
    },
    closeModals: (state, { payload }) => {
      state.isModalOpen = payload;
      state.logInModal = payload;
      state.registerModal = payload;
      state.logoutModal = payload;
      state.bookingModal = payload;
    },
  },
});

export const modalsReducer = modalsSlice.reducer;
export const {
  changeModalOpen,
  changeLogInModal,
  changeRegisterModal,
  changeLogoutModal,
  changeBookingModal,
  closeModals,
} = modalsSlice.actions;
