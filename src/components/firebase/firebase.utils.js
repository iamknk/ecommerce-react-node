import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvRfLTFzQQV7nHcVi_EH3TP9Gd2vEzptg",
  authDomain: "ecommerce-db-65b6d.firebaseapp.com",
  databaseURL: "https://ecommerce-db-65b6d.firebaseio.com",
  projectId: "ecommerce-db-65b6d",
  storageBucket: "ecommerce-db-65b6d.appspot.com",
  messagingSenderId: "904483994013",
  appId: "1:904483994013:web:9781c9a0d97380c6779774",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
