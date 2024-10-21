// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByCF_erStVAKrz2t1SJQ-kzEi0yTxEFCA",
  authDomain: "my-store-c166d.firebaseapp.com",
  projectId: "my-store-c166d",
  storageBucket: "my-store-c166d.appspot.com",
  messagingSenderId: "107033706601",
  appId: "1:107033706601:web:f9fd196b05e123457422f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}