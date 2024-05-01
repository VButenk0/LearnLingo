import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleFavorite, updateUserFromLookupResponse } from "./authSlice";
import {
  createUserWithEmailAndPassword,
  onIdTokenChanged,
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
      };
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const userData = {};

      const unsubscribe = onIdTokenChanged(auth, async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult();
          const token = idTokenResult.token;
          const email = idTokenResult.claims.email;
          const username = idTokenResult.claims.name;

          // Тут ви можете обробити дані з запиту lookup
          console.log(
            `idTokenResult: ${JSON.stringify(idTokenResult)}
            idTokenResult.claims: ${JSON.stringify(idTokenResult.claims)}
            username: ${username}; email: ${email}; token: ${token}.`
            // `Дані з запиту lookup: ${JSON.stringify(
            //   idTokenResult.claims
            // )} та токен ${token}`
          );
          thunkApi.dispatch(
            updateUserFromLookupResponse({ token, email, username })
          );
          unsubscribe();
        }
      });
      return userData;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await auth.signOut();
      console.log("Вихід з облікового запису успішний");
      return;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
