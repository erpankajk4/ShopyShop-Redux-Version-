// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt2DC8FfngC4YS0t3_JzOn78GGrryDxzw",
  authDomain: "shopyshop-redux3.firebaseapp.com",
  projectId: "shopyshop-redux3",
  storageBucket: "shopyshop-redux3.appspot.com",
  messagingSenderId: "582596671939",
  appId: "1:582596671939:web:f47bb0c9e45ffc24862576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database 
export const db = getFirestore(app);

// Initialize Firebase Authentication 
export const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserLocalPersistence);
