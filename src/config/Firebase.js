// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from ""

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh7pnA5mnnx-Q8l9zlsdXBEueBkNOSPSk",
  authDomain: "restobar-arcade.firebaseapp.com",
  projectId: "restobar-arcade",
  storageBucket: "restobar-arcade.appspot.com",
  messagingSenderId: "405547669195",
  appId: "1:405547669195:web:d8ee1fb5fdb529aee0ed4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// servicios que estoy ocupando

export const db = getFirestore(app)  //Recibe el firebase inicializado //Firestore
// const auth = getAuth(app) //servicio de autentificacion