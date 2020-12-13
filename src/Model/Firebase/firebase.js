// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5-twiRpx-S9nvdqvdLBBUdiAaFN_mkuA",
  authDomain: "timeline-c0e95.firebaseapp.com",
  databaseURL: "https://timeline-c0e95.firebaseio.com",
  projectId: "timeline-c0e95",
  storageBucket: "timeline-c0e95.appspot.com",
  messagingSenderId: "450800373612",
  appId: "1:450800373612:web:79fc1ffdce33557fc1ad49",
  measurementId: "G-6YZ6405H5N",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
