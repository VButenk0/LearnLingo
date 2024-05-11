import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const { uid, email, displayName, favorites } = user;

    const userRef = ref(database, `users/${uid}`);
    if (favorites !== undefined) {
      update(userRef, {
        email,
        username: displayName,
        favorites: favorites || [],
      });
    } else {
      update(userRef, { email, username: displayName });
    }
  } else {
    return null;
  }
});

export { auth, database };
