// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuqw0ROo4f_jQXXDAYVjZpY6GTnAh1NgQ",
  authDomain: "shopyshop-redux2.firebaseapp.com",
  projectId: "shopyshop-redux2",
  storageBucket: "shopyshop-redux2.appspot.com",
  messagingSenderId: "605724745530",
  appId: "1:605724745530:web:1acd670063142afe137a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database 
export const db = getFirestore(app);

// Initialize Firebase Authentication 
export const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserLocalPersistence);
