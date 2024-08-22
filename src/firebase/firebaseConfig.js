import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { ref } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA7d15kUZ0EAVhp5zEXZI05CcO0W1WVrYE",
  authDomain: "celu-shop-69566.firebaseapp.com",
  projectId: "celu-shop-69566",
  storageBucket: "celu-shop-69566.appspot.com",
  messagingSenderId: "611598295910",
  appId: "1:611598295910:web:bb98fa308c2095bcd05ea7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, ref };

