// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAOXMV4EgB6ZO_2yLhYtnPoqOeLKjeK-s",
  authDomain: "flick-movies.firebaseapp.com",
  projectId: "flick-movies",
  storageBucket: "flick-movies.appspot.com",
  messagingSenderId: "574445319475",
  appId: "1:574445319475:web:35188b7075b28995de7a46",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
