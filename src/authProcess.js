
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDRhYwxR2O1zeQFZQf_A70Jf4zNESlBfPc",
  authDomain: "dbase-a9d5a.firebaseapp.com",
  projectId: "dbase-a9d5a",
  storageBucket: "dbase-a9d5a.firebasestorage.app",
  messagingSenderId: "16367447538",
  appId: "1:16367447538:web:0eb42e275dbb4d2860cf6b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Сохраняем uid в localStorage
      localStorage.setItem("userId", user.uid);  // Сохраняем uid
      return user;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};


