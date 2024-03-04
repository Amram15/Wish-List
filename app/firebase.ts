// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4xDlcRm_w1okj9nnyjhNS_M-jW-D46bc",
  authDomain: "shopping-wish-list-25800.firebaseapp.com",
  projectId: "shopping-wish-list-25800",
  storageBucket: "shopping-wish-list-25800.appspot.com",
  messagingSenderId: "870050308884",
  appId: "1:870050308884:web:4a3ba56638053a8fc71801",
  measurementId: "G-B1N9GFE064"
};

// Initialize Firebase
const app = getApps().length ? getApp() :initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db,auth };
