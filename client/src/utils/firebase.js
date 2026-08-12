
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewmate-ai-fe10d.firebaseapp.com",
  projectId: "interviewmate-ai-fe10d",
  storageBucket: "interviewmate-ai-fe10d.firebasestorage.app",
  messagingSenderId: "796689340879",
  appId: "1:796689340879:web:e2db9c045a0fd4c9c39aba"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}