// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs0pBfaA5nbK9ldyJR54qmQFsD0x4MRwI",
  authDomain: "contact-app-95b17.firebaseapp.com",
  projectId: "contact-app-95b17",
  storageBucket: "contact-app-95b17.appspot.com",
  messagingSenderId: "852629318070",
  appId: "1:852629318070:web:d70150ea09817cdd07b917"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);