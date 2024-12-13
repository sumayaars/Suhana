import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVCdq6VlLt60WO5jd4IDCLt6CVGokCw5U",
  authDomain: "suhanaecomsite.firebaseapp.com",
  projectId: "suhanaecomsite",
  storageBucket: "suhanaecomsite.firebasestorage.app",
  messagingSenderId: "484422129912",
  appId: "1:484422129912:web:45c0d482f99652fd64c30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);