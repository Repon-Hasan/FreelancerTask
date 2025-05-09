// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHVN_ifjWsIQFxe3p4GWgQNFZcA_Q1tYQ",
  authDomain: "assignment-9-3f65f.firebaseapp.com",
  projectId: "assignment-9-3f65f",
  storageBucket: "assignment-9-3f65f.firebasestorage.app",
  messagingSenderId: "912343974168",
  appId: "1:912343974168:web:f8ac016b3720d97d90de6d",
  measurementId: "G-2SPNNDD4YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)