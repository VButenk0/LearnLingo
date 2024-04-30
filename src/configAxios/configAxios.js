import axios from "axios";

const apiKey = "AIzaSyDj9oAbVaOiQF17KQCrYeWmLjKYsNJQ2Nw";

export const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts:",
  headers: {
    key: `${apiKey}`,
  },
});

// export const setToken = (token) => {
//   authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearToken = () => {
//   authApi.defaults.headers.common.Authorization = ``;
// };

export const dataApi = axios.create({
  baseURL: "https://learnlingo-24a8d.firebaseio.com",
  headers: {
    key: `${apiKey}`,
  },
});
