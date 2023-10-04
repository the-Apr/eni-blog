import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA8dGfi5Rc7n9fz_Dvv3ZNrSYkg5WYKp6g",
  authDomain: "eniblog-3ba6b.firebaseapp.com",
  projectId: "eniblog-3ba6b",
  storageBucket: "eniblog-3ba6b.appspot.com",
  messagingSenderId: "70741283568",
  appId: "1:70741283568:web:f33bd760b2e1819f3ca835",
  measurementId: "G-RDN5PP93BL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();