// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "portifoliogallery.firebaseapp.com",
  projectId: "portifoliogallery",
  storageBucket: "portifoliogallery.appspot.com",
  messagingSenderId: "799491851984",
  appId: "1:799491851984:web:4e8924ef01329448e240d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app );