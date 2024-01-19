// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDctnmaXFfIUzgS7qlTLQLnfYcUjSqp8KA",
  authDomain: "quizapp-10172.firebaseapp.com",
  databaseURL: "https://quizapp-10172-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizapp-10172",
  storageBucket: "quizapp-10172.appspot.com",
  messagingSenderId: "453628766168",
  appId: "1:453628766168:web:cb0bea949de1b4000df4ad",
  measurementId: "G-H69L8FTKN9"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
