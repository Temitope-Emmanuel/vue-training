import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIZXogtYwShUlWn78sWSgq-CTGpZl6lBY",
  authDomain: "dojoblog-750f4.firebaseapp.com",
  projectId: "dojoblog-750f4",
  storageBucket: "dojoblog-750f4.appspot.com",
  messagingSenderId: "1031962172399",
  appId: "1:1031962172399:web:68183eceaf13498732341a",
  measurementId: "G-4J7GQP5BG4"
};

//  Init Firebase
firebase.initializeApp(firebaseConfig);

// Init firestore service

const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, timeStamp };
