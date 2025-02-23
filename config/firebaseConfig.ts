// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  //@ts-ignore
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAg1bO5YKPtzKkfBNMVfVvd5THyF9U73o",
  authDomain: "auth-f813f.firebaseapp.com",
  projectId: "auth-f813f",
  storageBucket: "auth-f813f.firebasestorage.app",
  messagingSenderId: "864436687105",
  appId: "1:864436687105:web:5eb70b22e7c4088803cb00",
  measurementId: "G-Z0YP2PL2K3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
