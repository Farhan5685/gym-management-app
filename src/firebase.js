// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration — make sure these EXACTLY match your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBoJCEODyQuzthI-Th0iYvAo1IY7A8i4yQ",
  authDomain: "gym-app-21aed.firebaseapp.com",    // Confirm no typo here
  projectId: "gym-app-21aed",
  storageBucket: "gym-app-21aed.appspot.com",    // Confirm this is exact
  messagingSenderId: "64817694797",
  appId: "1:64817694797:web:4d891bfd5432c200fcf404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app.name);  // Debug log

const auth = getAuth(app);
console.log('Firebase auth initialized:', auth);    // Debug log

export { auth };
