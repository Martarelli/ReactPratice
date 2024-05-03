// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2s7tiOdW6zqBt8Bw7LLRS26o-Kf7R5wE",
  authDomain: "react-martarelli.firebaseapp.com",
  projectId: "react-martarelli",
  storageBucket: "react-martarelli.appspot.com",
  messagingSenderId: "268153647943",
  appId: "1:268153647943:web:7239749f12927b4d555262",
  measurementId: "G-GQ80EP0LDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}