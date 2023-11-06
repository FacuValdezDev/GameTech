// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo2g22KLNgJZ1P6Pia9h46HSUQjk6fKMA",
  authDomain: "e-commerse-react-a8cb8.firebaseapp.com",
  projectId: "e-commerse-react-a8cb8",
  storageBucket: "e-commerse-react-a8cb8.appspot.com",
  messagingSenderId: "737301912751",
  appId: "1:737301912751:web:40fb8bf8c2c42add31485a",
  measurementId: "G-X0JCPXBTKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
