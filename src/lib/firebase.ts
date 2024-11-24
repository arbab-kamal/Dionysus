// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCruqNSOADu4zAUI_xGYkGx9DJ5U4TdHEs",
  authDomain: "dionysus-4bdec.firebaseapp.com",
  projectId: "dionysus-4bdec",
  storageBucket: "dionysus-4bdec.firebasestorage.app",
  messagingSenderId: "183444370307",
  appId: "1:183444370307:web:b9b57e41f936e859417cb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
