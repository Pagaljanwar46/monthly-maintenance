import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA16aGvMC6C5paU2VTVGwVfIn28d3F_Nhw",
  authDomain: "payment-recive.firebaseapp.com",
  projectId: "payment-recive",
  storageBucket: "payment-recive.firebasestorage.app",
  messagingSenderId: "1097895941676",
  appId: "1:1097895941676:web:268917b9c94261e2bfe389"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, doc, getDoc, setDoc };
