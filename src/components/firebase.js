import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAD3Hx9JLA3AmE37i2Nvfy4PXJUoCVJbZs",
  authDomain: "clone-6c715.firebaseapp.com",
  projectId: "clone-6c715",
  storageBucket: "clone-6c715.appspot.com",
  messagingSenderId: "656193053733",
  appId: "1:656193053733:web:d1ce1831e813d4466b0bcc",
  measurementId: "G-9DYT8RD568"
};
 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const auth = getAuth(app);









