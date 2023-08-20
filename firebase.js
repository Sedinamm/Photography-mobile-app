// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKUNpxnKHuU9y69lkAMVXcLfy1tZiisc0",
  authDomain: "photography-app-e741f.firebaseapp.com",
  projectId: "photography-app-e741f",
  storageBucket: "photography-app-e741f.appspot.com",
  messagingSenderId: "692382434970",
  appId: "1:692382434970:web:a73fac050ae2e7e66f0123",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
