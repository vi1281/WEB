// firebase.js
import { initializeApp } from 'firebase/app';  // Новый импорт для инициализации
import { getFirestore } from 'firebase/firestore'; // Импортируем Firestore
import { getAuth } from 'firebase/auth'; // Импортируем Authentication

// Ваши Firebase-конфигурации
const firebaseConfig = {
    apiKey: "AIzaSyDRhYwxR2O1zeQFZQf_A70Jf4zNESlBfPc",
    authDomain: "dbase-a9d5a.firebaseapp.com",
    projectId: "dbase-a9d5a",
    storageBucket: "dbase-a9d5a.firebasestorage.app",
    messagingSenderId: "16367447538",
    appId: "1:16367447538:web:0eb42e275dbb4d2860cf6b"
  };

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Firestore и Authentication
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };
