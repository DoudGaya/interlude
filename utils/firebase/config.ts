// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyC_oOErENEhajHYVNrhf-T7CW8Sl-jMoPQ",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN|| 'interlude-d07a6.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'interlude-d07a6',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'interlude-d07a6.appspot.com',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '244730054474',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:244730054474:web:abae3e6679b0b7610823b3',
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-NYYZP0BZMD',
};


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth()

export default firebase_app;