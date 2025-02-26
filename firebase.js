// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";  // Προσθήκη για Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_eoPGd6V6NxSG4uOmKJ39rYrWikOkDM",
  authDomain: "phone-80fee.firebaseapp.com",
  databaseURL: "https://phone-80fee-default-rtdb.firebaseio.com",
  projectId: "phone-80fee",
  storageBucket: "phone-80fee.firebasestorage.app",
  messagingSenderId: "954077174345",
  appId: "1:954077174345:web:8a1cb780257e7a3e687d98",
  measurementId: "G-3T7MTW0GLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  // Δημιουργία της σύνδεσης με τη βάση δεδομένων
