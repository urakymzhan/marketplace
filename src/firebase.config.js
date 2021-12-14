// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtsHZa1fL3bm2ETi7pTzje38_NKDBm_zU',
  authDomain: 'house-marketplace-app-d8964.firebaseapp.com',
  projectId: 'house-marketplace-app-d8964',
  storageBucket: 'house-marketplace-app-d8964.appspot.com',
  messagingSenderId: '210676614323',
  appId: '1:210676614323:web:804072c8bd52cc54429cc6',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
