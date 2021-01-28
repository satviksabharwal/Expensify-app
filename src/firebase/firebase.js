import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjDSrE-7Tt2FlbOMNaTUILHx_El_sNeKw",
  authDomain: "expensify-3b708.firebaseapp.com",
  databaseURL: "https://expensify-3b708-default-rtdb.firebaseio.com",
  projectId: "expensify-3b708",
  storageBucket: "expensify-3b708.appspot.com",
  messagingSenderId: "311655482305",
  appId: "1:311655482305:web:62786fe3d1bca423486540",
  measurementId: "G-GR894NZPQR",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
