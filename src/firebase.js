// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm26l6PUyALqfQ3MOBuPdqiIoKr5T2RzM",
  authDomain: "tripvilla.firebaseapp.com",
  projectId: "tripvilla-8521",
  storageBucket: "tripvilla.appspot.com",
  messagingSenderId: "828516015189",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
