// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD6fd_Y73SQPDJGv0d6id2kWJwIGfwOTfw",
  authDomain: "music-streamer-aa55a.firebaseapp.com",
  projectId: "music-streamer-aa55a",
  storageBucket: "music-streamer-aa55a.appspot.com",
  messagingSenderId: "1040539211643",
  appId: "1:1040539211643:web:12fedcc7f9ed592d99cfde",
  measurementId: "G-22SN4966J8"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export const auth = getAuth(firebase)
export const storage = getStorage(firebase);


