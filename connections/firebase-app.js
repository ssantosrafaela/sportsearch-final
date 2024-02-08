// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4TVPWuQzEPEZRH6cL7zlQ_LWtwourxtM",
  authDomain: "sport-search-ba6c9.firebaseapp.com",
  projectId: "sport-search-ba6c9",
  storageBucket: "sport-search-ba6c9.appspot.com",
  messagingSenderId: "794658986524",
  appId: "1:794658986524:web:3bd6cbff26247c54e19dd9",
  measurementId: "G-B5KWCVD4V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}