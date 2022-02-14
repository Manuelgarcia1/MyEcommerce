import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJfbunvGNJjHVSn0lK1ch2mUlviZwsYes",
    authDomain: "reactfirebase-cbb36.firebaseapp.com",
    projectId: "reactfirebase-cbb36",
    storageBucket: "reactfirebase-cbb36.appspot.com",
    messagingSenderId: "672144098403",
    appId: "1:672144098403:web:7ecddb30c523e8a7276456",
    measurementId: "G-2P8L71QEPJ"
  };

  const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);