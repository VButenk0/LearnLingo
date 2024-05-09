export const selectUser = (state) => state.authSlice.user;
export const selectFavorites = (state) => state.authSlice.user.favorites;
export const selectIsLogged = (state) => state.authSlice.isLogged;
export const selectIsLoading = (state) => state.authSlice.isLoading;
export const selectIsLoadingData = (state) => state.dataSlice.isLoading;
export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;
export const selectLogInModal = (state) => state.modalsSlice.logInModal;
export const selectRegisterModal = (state) => state.modalsSlice.registerModal;
export const selectLogoutModal = (state) => state.modalsSlice.logoutModal;
export const selectBookingModal = (state) => state.modalsSlice.bookingModal;
export const selectAllTeachers = (state) => state.dataSlice.allTeachers;
export const selectTeachers = (state) => state.dataSlice.teachers;
export const selectSelectedTeacher = (state) => state.dataSlice.selectedTeacher;
export const selectLoadedTeachersCount = (state) =>
  state.dataSlice.loadedTeachersCount;
