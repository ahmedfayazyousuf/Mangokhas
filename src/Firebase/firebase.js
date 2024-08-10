import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAcQNNboO7ZpaNhRzUx3HhPYA28kkOpwWI",
  authDomain: "mangokhasgames.firebaseapp.com",
  projectId: "mangokhasgames",
  storageBucket: "mangokhasgames.appspot.com",
  messagingSenderId: "919170642940",
  appId: "1:919170642940:web:15c60cf0e195a576887879",
  measurementId: "G-JHV67MRXEV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { app, db }; // Export app and db
