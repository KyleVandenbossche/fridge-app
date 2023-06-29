import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBB1rWZ77oGf_ZrecjAcgPMeNy9a8sUiE",
  authDomain: "recipes-31990.firebaseapp.com",
  projectId: "recipes-31990",
  storageBucket: "recipes-31990.appspot.com",
  messagingSenderId: "860436592782",
  appId: "1:860436592782:web:a880c924db53c02bc8b1df",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}

export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
