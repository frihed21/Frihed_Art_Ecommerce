// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBlx3IIONRbPqjLTMdf-C96A0-prcO0IY",
  authDomain: "frihed-ecommerce.firebaseapp.com",
  projectId: "frihed-ecommerce",
  storageBucket: "frihed-ecommerce.appspot.com",
  messagingSenderId: "226154866466",
  appId: "1:226154866466:web:04843d592edb4f4768677b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);