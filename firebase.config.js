// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj9oAbVaOiQF17KQCrYeWmLjKYsNJQ2Nw",
  authDomain: "learnlingo-24a8d.firebaseapp.com",
  databaseURL:
    "https://learnlingo-24a8d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-24a8d",
  storageBucket: "learnlingo-24a8d.appspot.com",
  messagingSenderId: "136681429187",
  appId: "1:136681429187:web:c918e0393aa0c4d2442a76",
  measurementId: "G-0SKH73JXDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
