// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ3-ygWcNTGgaHzfSkvue15gfBudjv8BA",
  authDomain: "netflixgpt-58679.firebaseapp.com",
  projectId: "netflixgpt-58679",
  storageBucket: "netflixgpt-58679.firebasestorage.app",
  messagingSenderId: "354171277556",
  appId: "1:354171277556:web:fb0a94aa473c74ef788ea1",
  measurementId: "G-4CK69W65V4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
