// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV_7RaD08I7-pJGnveUXQVgQwhW3OW6K0",
  authDomain: "im-phone.firebaseapp.com",
  projectId: "im-phone",
  storageBucket: "im-phone.appspot.com",
  messagingSenderId: "630051005314",
  appId: "1:630051005314:web:562043c8fa3255bddca59b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);