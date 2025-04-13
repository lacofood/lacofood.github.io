// firestores.js

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Your Firebase config (replace with your actual config from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDGoVCxqQMoaXL5WtYPMJ2GEy1fU53Ka_Q",
  authDomain: "laco-ca7ca.firebaseapp.com",
  databaseURL:
    "https://laco-ca7ca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "laco-ca7ca",
  storageBucket: "laco-ca7ca.firebasestorage.app",
  messagingSenderId: "1041307088868",
  appId: "1:1041307088868:web:bff0ed0383e110117df9f1",
  measurementId: "G-V1P0EPYWZ1",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore DB
export { db };
