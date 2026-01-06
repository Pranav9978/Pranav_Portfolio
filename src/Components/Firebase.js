import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfAa7D81tAN2HeP7T06EsDugPn313dI_s",
  authDomain: "portfolio-email-e3fea.firebaseapp.com",
  projectId: "portfolio-email-e3fea",
  storageBucket: "portfolio-email-e3fea.firebasestorage.app",
  messagingSenderId: "131116484796",
  appId: "1:131116484796:web:887debcd15e84cad3d28b9",
  measurementId: "G-NC3BWXDC9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional)
const analytics = getAnalytics(app);

// ✅ Firestore database (THIS WAS MISSING)
export const db = getFirestore(app);
