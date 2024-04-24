export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectIsModalOpen = (state) => state.modalSlice.isModalOpen;
export const selectLogInModal = (state) => state.modalSlice.logInModal;
export const selectRegisterModal = (state) => state.modalSlice.registerModal;
export const selectLogoutModal = (state) => state.modalSlice.logoutModal;
export const selectBookingModal = (state) => state.modalSlice.bookingModal;
