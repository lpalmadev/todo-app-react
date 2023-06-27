import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUO07U3bCgGxMpqyd0Ji22zsOD8PDlBvI",
  authDomain: "todo-app-react-326ad.firebaseapp.com",
  projectId: "todo-app-react-326ad",
  storageBucket: "todo-app-react-326ad.appspot.com",
  messagingSenderId: "494980592394",
  appId: "1:494980592394:web:f8fbbdede5718fd01f00f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);