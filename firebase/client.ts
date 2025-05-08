import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGLH7Rwb3C2cOSeqhmEZ7JjifLLQ347No",
  authDomain: "interviewr-c299d.firebaseapp.com",
  projectId: "interviewr-c299d",
  storageBucket: "interviewr-c299d.firebasestorage.app",
  messagingSenderId: "1072525597094",
  appId: "1:1072525597094:web:bcf3547d19258fa3789767",
  measurementId: "G-NYLXFQNY0K"
};

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
export const auth =getAuth(app);
export const db = getFirestore(app);