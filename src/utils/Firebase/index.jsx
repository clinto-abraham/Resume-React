import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  // onAuthStateChanged,
  // UserInfo,
} from "firebase/auth";
// import { getAnalytics } from 'firebase/analytics';
// import "dotenv/config";
// import dotenv from "dotenv"
// dotenv.config();
console.log(import.meta.env);

const firebaseConfig = {
  apiKey: "AIzaSyDS4yuEbToy3ZBji4wtaDqN0XhbtTYBqAs",
  authDomain: "clinto-resume.firebaseapp.com",
  projectId: "clinto-resume",
  storageBucket: "clinto-resume.appspot.com",
  messagingSenderId: "534586192993",
  appId: "1:534586192993:web:eb8a1283623882658f6620",
  measurementId: "G-DRNE624PL4",
};


// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,
// };
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const signOutUser = async () => await signOut(auth);
// export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const storage = getStorage(appFirebase);

// google analytics
// const analytics = getAnalytics(appFirebase);

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId
// };
