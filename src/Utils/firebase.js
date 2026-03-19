// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBVznd2CwugbxH7v9XNIiEIO3DAOjyxR4",
  authDomain: "netflixgpt-17march26.firebaseapp.com",
  projectId: "netflixgpt-17march26",
  storageBucket: "netflixgpt-17march26.firebasestorage.app",
  messagingSenderId: "18832505069",
  appId: "1:18832505069:web:3044b6580495574e12f4e4",
  measurementId: "G-D4ZN2RVWMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// for multiple firebase APIs
export const auth = getAuth(app);