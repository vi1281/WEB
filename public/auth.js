import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Firebase config
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
const auth = getAuth(app);

// Get buttons
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Event listener for login
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save email to localStorage for home page
      localStorage.setItem("userEmail", user.email);
      // Redirect to home page
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});
