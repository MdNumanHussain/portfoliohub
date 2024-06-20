// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkA24qyqwTKrkjNufCKouaJpOL9a0JP8w",
  authDomain: "portfolio-c674e.firebaseapp.com",
  databaseURL: "https://portfolio-c674e-default-rtdb.firebaseio.com",
  projectId: "portfolio-c674e",
  storageBucket: "portfolio-c674e.appspot.com",
  messagingSenderId: "206281986530",
  appId: "1:206281986530:web:ea65bb24d56590021d69bb",
  measurementId: "G-XFNS8KP6TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database, ref, set, push, onValue };
