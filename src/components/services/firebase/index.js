// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpVzVvG9wD423qcqqSw2I4av6e7zL7zjQ",
  authDomain: "ecommerce-react-25ab3.firebaseapp.com",
  projectId: "ecommerce-react-25ab3",
  storageBucket: "ecommerce-react-25ab3.appspot.com",
  messagingSenderId: "619734735862",
  appId: "1:619734735862:web:844c0372126659d1a445d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);