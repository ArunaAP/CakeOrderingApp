// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnhbycsIFysYkZhKmI_WobOfJcey4e8as",
  authDomain: "cakeapp-365d5.firebaseapp.com",
  projectId: "cakeapp-365d5",
  storageBucket: "cakeapp-365d5.appspot.com",
  messagingSenderId: "1041693789118",
  appId: "1:1041693789118:web:1de15c2f811b28c29cc7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)