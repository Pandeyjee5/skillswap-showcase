import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace these placeholders with the keys from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAcErWymERulgzHVByUW8V-Av0gtn7Qy2A",
  authDomain: "skillswap-showcase.firebaseapp.com",
  projectId: "skillswap-showcase",
  storageBucket: "skillswap-showcase.firebasestorage.app",
  messagingSenderId: "54047180095",
  appId: "1:54047180095:web:3cbba67e161cb3b0b37f8a",
  measurementId: "G-ZD4R3HXDYF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);