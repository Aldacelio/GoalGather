// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAYysQvOl_fzGtQvwjnEI1t77KLGSsf7A",
  authDomain: "goalgather-240b9.firebaseapp.com",
  projectId: "goalgather-240b9",
  storageBucket: "goalgather-240b9.appspot.com",
  messagingSenderId: "412080473054",
  appId: "1:412080473054:web:b8353597c8244df404934f",
  measurementId: "G-WH1MPJKS6S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const analytics = getAnalytics(app);

export { auth, database, analytics };
