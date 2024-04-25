export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;
export const selectLogInModal = (state) => state.modalsSlice.logInModal;
export const selectRegisterModal = (state) => state.modalsSlice.registerModal;
export const selectLogoutModal = (state) => state.modalsSlice.logoutModal;
export const selectBookingModal = (state) => state.modalsSlice.bookingModal;
