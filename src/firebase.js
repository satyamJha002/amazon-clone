import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCICM6IC6u_qtVXEXmEmn-lUCLiQoLESBA",
  authDomain: "clone-3b5b3.firebaseapp.com",
  projectId: "clone-3b5b3",
  storageBucket: "clone-3b5b3.appspot.com",
  messagingSenderId: "523951303229",
  appId: "1:523951303229:web:47cfeffb758264b4825854",
  measurementId: "G-4Q3Q132K1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
