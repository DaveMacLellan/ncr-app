// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA20_L4B3Bh1wsRh-Jym6ObkpyXy7u6Q1g",
    authDomain: "ncr-app-bed99.firebaseapp.com",
    databaseURL: "https://ncr-app-bed99-default-rtdb.firebaseio.com",
    projectId: "ncr-app-bed99",
    storageBucket: "ncr-app-bed99.appspot.com",
    messagingSenderId: "536257573800",
    appId: "1:536257573800:web:e89a3e52f05c186ca6639d",
    measurementId: "G-7G0LH5R96K"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init services
const db = getFirestore(app);

export default db;