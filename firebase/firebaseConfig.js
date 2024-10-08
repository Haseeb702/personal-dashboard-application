import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import dotenv from 'dotenv';
dotenv.config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "personal-dashboard-appli-b5862.firebaseapp.com",
  projectId: "personal-dashboard-appli-b5862",
  storageBucket: "personal-dashboard-appli-b5862.appspot.com",
  messagingSenderId: "1019905844822",
  appId: "1:1019905844822:web:6b24cfa849e8ee79f17df7",
  measurementId: "G-MMX11TD4VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const;