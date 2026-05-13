// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQtKRP4Ce5pj6GlRfxydw4dK3-U6Via8",
  authDomain: "netlify-2e376.firebaseapp.com",
  projectId: "netlify-2e376",
  storageBucket: "netlify-2e376.firebasestorage.app",
  messagingSenderId: "474740169540",
  appId: "1:474740169540:web:6a1c8c175a3c3828c79511",
  measurementId: "G-F3Z67V354C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
