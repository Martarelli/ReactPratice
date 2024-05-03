import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {firebaseApp, auth}