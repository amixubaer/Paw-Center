// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn943HzKmrb8wz2VgRH2z8Y8X-lGQGc5I",
  authDomain: "paw-center.firebaseapp.com",
  projectId: "paw-center",
  storageBucket: "paw-center.appspot.com",
  messagingSenderId: "453713459598",
  appId: "1:453713459598:web:cc55db3a19392bd2104cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
