import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXOzuoaVqjDJIwwykQ1uEeiO-gtztMfCE",
  authDomain: "prepwise-449fc.firebaseapp.com",
  projectId: "prepwise-449fc",
  storageBucket: "prepwise-449fc.firebasestorage.app",
  messagingSenderId: "1073098459037",
  appId: "1:1073098459037:web:35bd7603125cb70a249174",
  measurementId: "G-Z6GLG8BC5S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);