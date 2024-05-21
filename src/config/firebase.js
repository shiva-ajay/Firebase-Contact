// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKNmJY7Y_zHPFzCZZp2bFZF2FfsVtAW3I",
  authDomain: "contact-c0227.firebaseapp.com",
  projectId: "contact-c0227",
  storageBucket: "contact-c0227.appspot.com",
  messagingSenderId: "1055388040590",
  appId: "1:1055388040590:web:df92f88ebca3b9dc5d38df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);