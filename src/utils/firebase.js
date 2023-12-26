// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrmxSrvG681pugwc29fV-MNKOCb9AhKjA",
  authDomain: "netflix-61e20.firebaseapp.com",
  projectId: "netflix-61e20",
  storageBucket: "netflix-61e20.appspot.com",
  messagingSenderId: "352180947949",
  appId: "1:352180947949:web:a97854962c0729fd1675e4",
  measurementId: "G-9E5D8TZBWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
