import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGFbNnXzx9w2nW_VHncc8-jDzmSNpssgw",
  authDomain: "quiz-app-48526.firebaseapp.com",
  projectId: "quiz-app-48526",
  storageBucket: "quiz-app-48526.appspot.com",
  messagingSenderId: "950917181839",
  appId: "1:950917181839:web:e79a49126addc04a0a5bfa",
  measurementId: "G-2SDVMTFKY8", // Optional, only required if you use Firebase Analytics
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now you can use 'firebase.auth()' and 'firebase.firestore()'
const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
