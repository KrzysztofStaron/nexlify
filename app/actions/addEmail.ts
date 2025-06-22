"use server";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs4auxAzIfzeNRQDeix8yWDb9OnelN_90",

  authDomain: "nexlify-cacc8.firebaseapp.com",

  projectId: "nexlify-cacc8",

  storageBucket: "nexlify-cacc8.firebasestorage.app",

  messagingSenderId: "120226840781",

  appId: "1:120226840781:web:9dd31f2ca76c658ff12984",

  measurementId: "G-7J98JV10S0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addUser(email: string, details: string) {
  const userRef = doc(collection(db, "nexlify"), email);

  await setDoc(userRef, {
    email: email,
    details: details || "",
  });

  console.log("User added to waitlist", email, details);
}
