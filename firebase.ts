import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyBYemrB3zhhbo0XpIkIfOMUWxDf1spNRzs",
    authDomain: "next-saas-translator-app.firebaseapp.com",
    projectId: "next-saas-translator-app",
    storageBucket: "next-saas-translator-app.appspot.com",
    messagingSenderId: "408761353770",
    appId: "1:408761353770:web:23ae3e933e70e26f892553"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };