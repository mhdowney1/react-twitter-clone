// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// PORTABLE DB
const firebaseConfig = {
  apiKey: "AIzaSyDNOahkyss34UrReHhSrz8s1WM76rN1Hvg",
  authDomain: "twitter-clone-77ac3.firebaseapp.com",
  databaseURL: "https://twitter-clone-77ac3.firebaseio.com",
  projectId: "twitter-clone-77ac3",
  storageBucket: "twitter-clone-77ac3.appspot.com",
  messagingSenderId: "155846320131",
  appId: "1:155846320131:web:2d2394e01ed090b50aae36",
  measurementId: "G-G5MR2V0SRB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// CARRY THIS DB IN OUR POCKET AND USE IT ANYWHERE ELSE
export default db;
