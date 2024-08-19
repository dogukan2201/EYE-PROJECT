import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import {  onSnapshot } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

import { toast } from "react-hot-toast";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-XPvxU6-qQS1EZqv_BGp390A3zADbwD0",
  authDomain: "eyemovie-dd60b.firebaseapp.com",
  projectId: "eyemovie-dd60b",
  storageBucket: "eyemovie-dd60b.appspot.com",
  messagingSenderId: "674391291135",
  appId: "1:674391291135:web:eb287c15e4fd4d812408ca",
  measurementId: "G-2SF3GPXL7D"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);



export const getData = async (userMail) => {
  try {
    const docRef = doc(db, "EYE", userMail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().watchList);
      return docSnap.data().watchList
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error.message);
  }
};




export const addData = async(movieList, userId) => {
  try {
    const userDocRef = doc(db, "EYE", userId);
    await setDoc(userDocRef, { watchList: movieList });     
    console.log("Document successfully written!");
  } catch (e) {
    console.error("Error adding document: ", e.message);
  }
};


export const signUp = async(email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
};

export const login = async(email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
};

export const logOut = async() => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    toast.error(error.message)
  }
};
