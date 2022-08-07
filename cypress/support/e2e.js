import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fbConfig = {
  apiKey: "AIzaSyBdWsKS3hPueuIZvh7shUQ-eyLVnHDssPg",
  authDomain: "oblique-strategies-editor.firebaseapp.com",
  projectId: "oblique-strategies-editor",
  storageBucket: "oblique-strategies-editor.appspot.com",
  messagingSenderId: "101167565650",
  appId: "1:101167565650:web:58ec1d2649856e0986888b"
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')