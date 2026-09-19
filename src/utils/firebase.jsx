// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "autocare-1defe.firebaseapp.com",
  projectId: "autocare-1defe",
  storageBucket: "autocare-1defe.firebasestorage.app",
  messagingSenderId: "434025427745",
  appId: "1:434025427745:web:738b66c04816ff82400460",
  measurementId: "G-1SCH4V3KMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;