// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_dtby4LaXp62Hu_TBhZhE76al9U3gQ8",
  authDomain: "expense-budget-app-6a757.firebaseapp.com",
  projectId: "expense-budget-app-6a757",
  storageBucket: "expense-budget-app-6a757.appspot.com",
  messagingSenderId: "967859375555",
  appId: "1:967859375555:web:da69ba3190b1d2b2e10176",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// create New user
export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login user
export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Logout User
export const logout = () => {
  return signOut(auth);
};

//  custom hook to get current User
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};
