import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleFavorite, updateUserFromLookupResponse } from "./authSlice";
import {
  createUserWithEmailAndPassword,
  onIdTokenChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, database } from "../../firebase.config";
import { get, ref, update } from "firebase/database";
import { toast } from "react-toastify";

export const API_KEY = "AIzaSyDj9oAbVaOiQF17KQCrYeWmLjKYsNJQ2Nw";

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
            favorites: [],
          }),
        }
      );

      await response.json();

      toast.info("Sign up successful!");

      return {
        token: user.idToken,
        email: user.email,
        username: user.displayName,
      };
    } catch (error) {
      toast.error(error.message);
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

      toast.info("Log in successful!");

      return {
        token: user.idToken,
        email: user.email,
        username: user.displayName,
        favorites: user.favorites,
      };
    } catch (error) {
      toast.error(error.message);
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
          const userRef = ref(database, `users/${user.uid}`);
          const snapshot = await get(userRef);
          const favorites = snapshot.val().favorites;

          thunkApi.dispatch(
            updateUserFromLookupResponse({ token, email, username, favorites })
          );
          unsubscribe();
        }
      });
      return userData;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await auth.signOut();
      return;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateFavoritesInDatabase = createAsyncThunk(
  "auth/updateFavorites",
  async (_, thunkApi) => {
    const { getState } = thunkApi;
    const { favorites } = getState().authSlice.user;
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error("No user is currently signed in.");
    }

    const userRef = ref(database, `users/${currentUser.uid}`);

    try {
      await update(userRef, { favorites });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const toggleFavoriteThunk = (teacher) => async (dispatch) => {
  dispatch(toggleFavorite(teacher));

  dispatch(updateFavoritesInDatabase());
};
