import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHjS-SINgTW5-l6FM2xnBgaY2lERf6CC8",
  authDomain: "habittracker-b50d0.firebaseapp.com",
  databaseURL: "https://habittracker-b50d0-default-rtdb.firebaseio.com",
  projectId: "habittracker-b50d0",
  storageBucket: "habittracker-b50d0.appspot.com",
  messagingSenderId: "296876085926",
  appId: "1:296876085926:web:4d5a87d79e3a9819301a67",
  measurementId: "G-WXRZ5QCH5S",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
