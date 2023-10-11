// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: "AIzaSyA8dGfi5Rc7n9fz_Dvv3ZNrSYkg5WYKp6g",
//   authDomain: "eniblog-3ba6b.firebaseapp.com",
//   projectId: "eniblog-3ba6b",
//   storageBucket: "eniblog-3ba6b.appspot.com",
//   messagingSenderId: "70741283568",
//   appId: "1:70741283568:web:f33bd760b2e1819f3ca835",
//   measurementId: "G-RDN5PP93BL"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { firebaseApp, timestamp };
// export const db = firebaseApp.firestore();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8dGfi5Rc7n9fz_Dvv3ZNrSYkg5WYKp6g",
  authDomain: "eniblog-3ba6b.firebaseapp.com",
  projectId: "eniblog-3ba6b",
  storageBucket: "eniblog-3ba6b.appspot.com",
  messagingSenderId: "70741283568",
  appId: "1:70741283568:web:f33bd760b2e1819f3ca835",
  measurementId: "G-RDN5PP93BL"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Firebase Authentication instance
const db = getFirestore(firebaseApp); // Firestore instance
const timestamp = serverTimestamp(); // Server timestamp

export { firebaseApp, auth, db, timestamp };
