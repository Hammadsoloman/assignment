// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16itE7u_bWNvJ0vsOX1GN88OhLWYb7ro",
  authDomain: "workspace-management-sys-d886d.firebaseapp.com",
  projectId: "workspace-management-sys-d886d",
  storageBucket: "workspace-management-sys-d886d.appspot.com",
  messagingSenderId: "518311883225",
  appId: "1:518311883225:web:31a64dd8daf2a8c99fa9c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const storage = getStorage(app);

//export default firestoreDatabase;

