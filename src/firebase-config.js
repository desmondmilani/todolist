// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn_g2DpjSpZaAXLRc2taSiwinCJgsUWp8",
  authDomain: "todolist-9e984.firebaseapp.com",
  projectId: "todolist-9e984",
  storageBucket: "todolist-9e984.appspot.com",
  messagingSenderId: "628855546311",
  appId: "1:628855546311:web:220e221862dba5b8e5b9e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//database

export const db = getFirestore();