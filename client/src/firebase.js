// src/firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { YOUR_API_KEY, YOUR_PROJECT_ID } from "./keys.js";

// 🔐 Конфигурация твоего проекта Firebase
const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: `${YOUR_PROJECT_ID}.firebaseapp.com`,
  projectId: YOUR_PROJECT_ID,
  storageBucket: `${YOUR_PROJECT_ID}.appspot.com`,
  messagingSenderId: "1044755392547",
  appId: "1:1044755392547:web:375c974a01e21a9ccc6996",
  measurementId: "G-2HZLMVBN12",
};

// Инициализация Firebase и аутентификации
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const logOut = () => {
  return signOut(auth);
};

export { auth, provider, signInWithPopup, signOut };
