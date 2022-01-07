// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfMHidQxVMVvhsTCxuI-vVbArNXHVRoTw",
  authDomain: "clone-1fd73.firebaseapp.com",
  projectId: "clone-1fd73",
  storageBucket: "clone-1fd73.appspot.com",
  messagingSenderId: "968144924291",
  appId: "1:968144924291:web:8e6d53260a595ce7c8b5b6",
  measurementId: "G-4ED04M1QB9",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
