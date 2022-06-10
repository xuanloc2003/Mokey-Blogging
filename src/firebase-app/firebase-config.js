import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzmXlQwFQUV7Nl-lz_bzrlHEDyj799tlA",
  authDomain: "monkey-bloggin.firebaseapp.com",
  projectId: "monkey-bloggin",
  storageBucket: "monkey-bloggin.appspot.com",
  messagingSenderId: "705162325898",
  appId: "1:705162325898:web:d460948f9f51a369646273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
