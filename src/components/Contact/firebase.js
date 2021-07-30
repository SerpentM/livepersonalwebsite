import firebase from "firebase";

 
  var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCElIKWCOFbL2Y3gWbe_IVy-WsQH1xOVdk",
    authDomain: "portfolio-personalweb.firebaseapp.com",
    projectId: "portfolio-personalweb",
    storageBucket: "portfolio-personalweb.appspot.com",
    messagingSenderId: "832564671912",
    appId: "1:832564671912:web:110590b88a75b6e47f199d",
    measurementId: "G-0TWT4T0BRW"
  })

  var db = firebaseConfig.firestore();

  export { db };