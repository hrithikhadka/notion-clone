import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzOuVs3z7sFHqnABzM5FXoSjhL_h7387k",
  authDomain: "notion-clone-6f727.firebaseapp.com",
  projectId: "notion-clone-6f727",
  storageBucket: "notion-clone-6f727.firebasestorage.app",
  messagingSenderId: "1075590248459",
  appId: "1:1075590248459:web:dcb300289c36934d5def0e",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db };
