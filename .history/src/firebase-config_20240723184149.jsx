import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBxa1WAEUocAXqw3Jy8g9hDkEkX639s4RA",
	authDomain: "rekiteku-2024.firebaseapp.com",
	projectId: "rekiteku-2024",
	storageBucket: "rekiteku-2024.appspot.com",
	messagingSenderId: "967172949976",
	appId: "1:967172949976:web:68451d0af5e0a6136214ad"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const storageRef = ref(storage, 'images');