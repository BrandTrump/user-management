// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlceqamsTSSgH1-Bmj1Km9Rad4Cnq1o_8",
  authDomain: "firestooooore.firebaseapp.com",
  databaseURL: "https://firestooooore-default-rtdb.firebaseio.com",
  projectId: "firestooooore",
  storageBucket: "firestooooore.appspot.com",
  messagingSenderId: "196855905952",
  appId: "1:196855905952:web:76013c35a953ff2233d3c5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);