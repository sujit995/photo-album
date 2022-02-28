import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA1KqO2wIdHmRZ39uMjEmyJUx0Mm7TkPXg",
  authDomain: "gallery-app-6987a.firebaseapp.com",
  projectId: "gallery-app-6987a",
  storageBucket: "gallery-app-6987a.appspot.com",
  messagingSenderId: "751725383842",
  appId: "1:751725383842:web:bd38bf3b27a9d18777c7fb",
  measurementId: "G-XP58L79R4J"
});

export const storage = firebase.storage();

export default app;
