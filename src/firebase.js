// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRhYwxR2O1zeQFZQf_A70Jf4zNESlBfPc",
  authDomain: "dbase-a9d5a.firebaseapp.com",
  projectId: "dbase-a9d5a",
  storageBucket: "dbase-a9d5a.firebasestorage.app",
  messagingSenderId: "16367447538",
  appId: "1:16367447538:web:0eb42e275dbb4d2860cf6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default const auth = getAuth(app);