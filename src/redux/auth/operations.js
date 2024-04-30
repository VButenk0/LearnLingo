import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleFavorite } from "./authSlice";
import { authApi } from "../../configAxios/configAxios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase.config";

export const API_KEY = "AIzaSyDj9oAbVaOiQF17KQCrYeWmLjKYsNJQ2Nw";

export const toggleFavoriteThunk = (teacher) => (dispatch) => {
  dispatch(toggleFavorite(teacher));
};

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async ({ username, email, password }, thunkApi) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const idToken = await user.getIdTokenResult();

      const response = await fetch(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: idToken.token,
            displayName: username,
          }),
        }
      );

      await response.json();

      console.log("Реєстрація пройшла успішно");

      return {
        token: user.idToken,
        email: user.email,
        username: user.displayName,
        // Додайте інші необхідні поля користувача тут, якщо потрібно
      };
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkApi) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("Успішний вхід");

      return {
        token: user.idToken,
        email: user.email,
        username: user.displayName,
        // Додайте інші необхідні поля користувача тут, якщо потрібно
      };
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  // credentials = idToken
  async (credentials, thunkApi) => {
    try {
      const { data } = await authApi.post("lookup", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const logoutThunk = createAsyncThunk(
//   "auth/logout",
//   async (_, thunkApi) => {
//     try {
//       await api.post("api/auth/logout");
//       localStorage.removeItem("auth");
//       localStorage.removeItem("counter");
//       localStorage.removeItem("data");
//       clearToken();
//     } catch (error) {
//       toast.error(error.message);
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
