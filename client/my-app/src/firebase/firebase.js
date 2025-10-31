// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW61bEb7RGppK2WYxLkznKTb7DTr68MfE",
  authDomain: "financeflow-e9929.firebaseapp.com",
  projectId: "financeflow-e9929",
  storageBucket: "financeflow-e9929.firebasestorage.app",
  messagingSenderId: "239084690977",
  appId: "1:239084690977:web:e3cc84a0b2470618f84d60",
  measurementId: "G-0M49BWEQGY"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth}