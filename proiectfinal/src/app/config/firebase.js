import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6B2cA4Ow2UtlCLNLdzmSUbnDcvPe_JyU",
  authDomain: "proiectfinalscoalainformala.firebaseapp.com",
  projectId: "proiectfinalscoalainformala",
  storageBucket: "proiectfinalscoalainformala.appspot.com",
  messagingSenderId: "694629068633",
  appId: "1:694629068633:web:85975ef5ff3fee7e782648",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
