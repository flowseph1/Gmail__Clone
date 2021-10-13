import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIgXUjpYo4EYVSYRxC4PVSli-zNPfKzNk",
    authDomain: "clone-6247d.firebaseapp.com",
    projectId: "clone-6247d",
    storageBucket: "clone-6247d.appspot.com",
    messagingSenderId: "790644839978",
    appId: "1:790644839978:web:6e9d16264a04cd93455553",
    measurementId: "G-KRDYPM99VL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
