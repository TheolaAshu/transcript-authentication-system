// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0eHzN5AWUP8DxQb8jhZ9TtEtsj57ZOo",
  authDomain: "t-scripty.firebaseapp.com",
  projectId: "t-scripty",
  storageBucket: "t-scripty.appspot.com",
  messagingSenderId: "468422233143",
  appId: "1:468422233143:web:32ad45d8752ac3b52c83b2",
  measurementId: "G-TX0NECQ4MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth};