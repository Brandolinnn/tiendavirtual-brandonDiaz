import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUrHAqhDT7YVc1l38hfTbSKC3j78XiFR8",
  authDomain: "coderhouse-ecommerce-3497b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-3497b",
  storageBucket: "coderhouse-ecommerce-3497b.appspot.com",
  messagingSenderId: "847749827209",
  appId: "1:847749827209:web:52c386b8045de15bd51458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
