let signedIn = false;

//FIREBASE AUTHETICATION
function initListeners() {
  console.log("test to see if working");
  if(signedIn){
    let loginStatus = document.getElementsByClassName("login");
    loginStatus.innerHTML = "Log Out";
  }
  $("#createAccountBtn").on("click", (e) => {
    console.log("whoa there");
    e.preventDefault();
    let fName = $("#fName").val();
    let email = $("#email").val();
    let pw = $("#password").val();
    console.log("Name: " + fName);

    createUserWithEmailAndPassword(auth, email, pw)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    signedIn = true;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error Message " + errorMessage);
  });
  })

  $("#SignInBtn").on("click", (e) => {
    e.preventDefault();
    let fNames = $("#fNames").val();
    let emails = $("#emails").val();
    let pws = $("#passwords").val();
    console.log("Name: " + fNames);
    signInWithEmailAndPassword(auth, emails, pws)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      signedIn = true;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error Message " + errorMessage);
    });
  })

  $("#signOut").on("click", (e) =>{
    signOut(auth).then(() => {
      signedIn = false;
      console.log("signed out");
    }).catch((error) => {
      console.log("there was an error");
    })
  })
}
 
$(document).ready(function () {
initListeners();
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBS3gnu5eZHlmknf6DyTl7xs7x97pXBxv8",
  authDomain: "n315-eplagge.firebaseapp.com",
  projectId: "n315-eplagge",
  storageBucket: "n315-eplagge.appspot.com",
  messagingSenderId: "1093403993027",
  appId: "1:1093403993027:web:29a5cbcb129036a09f9376",
  measurementId: "G-760S8FW5QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

