// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0BnjbiCHcs5MG1phzWzFci6xzI_ZegM",
  authDomain: "shopyshop-redux.firebaseapp.com",
  projectId: "shopyshop-redux",
  storageBucket: "shopyshop-redux.appspot.com",
  messagingSenderId: "753493462167",
  appId: "1:753493462167:web:f5482df6b31f12b90a6dd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database 
export const db = getFirestore(app);

// Initialize Firebase Authentication 
export const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserLocalPersistence);
