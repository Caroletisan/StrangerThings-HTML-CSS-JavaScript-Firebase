  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB95F3zeaeECs3iPpJqnhHDVODUiNrl3cg",
    authDomain: "landpage-strangerthings.firebaseapp.com",
    projectId: "landpage-strangerthings",
    storageBucket: "landpage-strangerthings.appspot.com",
    messagingSenderId: "755193080065",
    appId: "1:755193080065:web:7cac88fa13da4578689300"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app