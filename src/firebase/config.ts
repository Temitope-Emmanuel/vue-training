import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZTeBn9wZDTUuKlwLvsLDwbKml2Z-jqfg",
  authDomain: "livechat-611d6.firebaseapp.com",
  projectId: "livechat-611d6",
  storageBucket: "livechat-611d6.appspot.com",
  messagingSenderId: "496424613889",
  appId: "1:496424613889:web:38f0d277ae82242006a800",
  measurementId: "G-TCL03RGJJ1"
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timeStamp };
