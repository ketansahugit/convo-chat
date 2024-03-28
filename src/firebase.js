import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6F1qR2Z8h60ODMM-sOcVjedzPNkHqWok",
  authDomain: "convo-chat-41f8c.firebaseapp.com",
  projectId: "convo-chat-41f8c",
  storageBucket: "convo-chat-41f8c.appspot.com",
  messagingSenderId: "603998107177",
  appId: "1:603998107177:web:45be444bb655015ab44e38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();

