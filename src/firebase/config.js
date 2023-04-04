

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyBBarbpbKyic1u9-XPVj7RLonUs0zk1EWw",
    authDomain: "journal-app-b191c.firebaseapp.com",
    projectId: "journal-app-b191c",
    storageBucket: "journal-app-b191c.appspot.com",
    messagingSenderId: "587970941194",
    appId: "1:587970941194:web:491ec317bbfee553ec2af3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );