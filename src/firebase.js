// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "campus-a9453.firebaseapp.com",
  projectId: "campus-a9453",
  storageBucket: "campus-a9453.firebasestorage.app",
  messagingSenderId: "6355339265",
  appId: "1:6355339265:web:767ccfe2fcfa0fc7c71800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);