// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8z0DPR0fjdGWhyxN9b-CVgvaM3dFgpQQ",
  authDomain: "netflixgpt-52826.firebaseapp.com",
  projectId: "netflixgpt-52826",
  storageBucket: "netflixgpt-52826.appspot.com",
  messagingSenderId: "1015639806077",
  appId: "1:1015639806077:web:e65e406e47d68955432114",
  measurementId: "G-8JCGEGD6NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);