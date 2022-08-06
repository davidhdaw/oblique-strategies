// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdWsKS3hPueuIZvh7shUQ-eyLVnHDssPg",
  authDomain: "oblique-strategies-editor.firebaseapp.com",
  projectId: "oblique-strategies-editor",
  storageBucket: "oblique-strategies-editor.appspot.com",
  messagingSenderId: "101167565650",
  appId: "1:101167565650:web:58ec1d2649856e0986888b"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
