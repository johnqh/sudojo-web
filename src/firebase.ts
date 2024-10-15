// src/firebase.ts

import firebase from 'firebase/app'; // No 'compat' for Firebase v8
import 'firebase/auth'; // Firebase auth import

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY!,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.REACT_APP_FIREBASE_APP_ID!,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = firebase.auth();

export { auth };