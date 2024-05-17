import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { dataReducer } from "./data/dataSlice";
import { modalsReducer } from "./modals/modalsSlice";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    dataSlice: dataReducer,
    modalsSlice: modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});
