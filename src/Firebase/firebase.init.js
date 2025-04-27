// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO39sa5v0P3gBWXqBB-MkoQeYxeMZYN18",
  authDomain: "module-49-2d879.firebaseapp.com",
  projectId: "module-49-2d879",
  storageBucket: "module-49-2d879.firebasestorage.app",
  messagingSenderId: "19133183676",
  appId: "1:19133183676:web:f0bdb390fba975a46cc2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);