import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrgUgOhVSw-nVkqvKUg-iGhto4Ees-jOI",
  authDomain: "firegram01-a0050.firebaseapp.com",
  projectId: "firegram01-a0050",
  storageBucket: "firegram01-a0050.appspot.com",
  messagingSenderId: "1074289279322",
  appId: "1:1074289279322:web:dac9b3ccdad73031e5b363",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
