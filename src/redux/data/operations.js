import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../../firebase.config";
import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

export const getAllTeachersThunk = createAsyncThunk(
  "data/getAllTeachers",
  async (_, thunkApi) => {
    try {
      const collectionRef = ref(database, "teachers");
      const snapshot = await get(collectionRef);

      const allTeachers = snapshot.exists()
        ? Object.entries(snapshot.val()).map(([id, value]) => ({
            id,
            ...value,
          }))
        : [];
      return allTeachers;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTeachersThunk = createAsyncThunk(
  "data/getTeachers",
  async (loadedTeachersCount, thunkAPI) => {
    try {
      const collectionRef = ref(database, "teachers");
      const teachers = [];
      const snapshot = await get(
        query(
          collectionRef,
          orderByKey(),
          startAt(String(loadedTeachersCount)),
          limitToFirst(4)
        )
      );

      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          teachers.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
      }
      return teachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
