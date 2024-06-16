// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK-08tA0XPjyFBsUwYVUqAh5i9B9apbdg",
  authDomain: "learnie-501d9.firebaseapp.com",
  projectId: "learnie-501d9",
  storageBucket: "learnie-501d9.appspot.com",
  messagingSenderId: "1085268488404",
  appId: "1:1085268488404:web:d4eb57e590330fc5150b41",
  measurementId: "G-M61088M0QS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);