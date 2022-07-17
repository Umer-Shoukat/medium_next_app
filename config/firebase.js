import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbMeODRhXXf7NPkTViaTKoRz8WKJ8PUbs",
  authDomain: "medium-nextjs.firebaseapp.com",
  projectId: "medium-nextjs",
  storageBucket: "medium-nextjs.appspot.com",
  messagingSenderId: "1037304696240",
  appId: "1:1037304696240:web:c2e4a216b5c3cbd91f1a75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
