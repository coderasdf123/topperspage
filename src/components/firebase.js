// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Replace this with your Firebase config from the console
  apiKey: "AIzaSyAFPOXHb3GuS8ja-CVfylOSVHWW9c0w6P8",
  authDomain: "commentinsights-8873a.firebaseapp.com",
  projectId: "commentinsights-8873a",
  storageBucket: "commentinsights-8873a.firebasestorage.app",
  messagingSenderId: "595223640987",
  appId: "1:595223640987:web:5882e725e85daae800ff3e",
  measurementId: "G-JMZVEH8RBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
export const db = getDatabase(app);