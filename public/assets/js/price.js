console.log("wecome to priving")

var firebaseConfig = {
    apiKey: "AIzaSyB9rN67zGWN-D8GOIacASuXB_wHSlcga9Y",
    authDomain: "streeridesauth.firebaseapp.com",
    databaseURL: "https://streeridesauth.firebaseio.com",
    projectId: "streeridesauth",
    storageBucket: "streeridesauth.appspot.com",
    messagingSenderId: "1080267560513",
    appId: "1:1080267560513:web:afa9814263afb6b44c58c0",
    measurementId: "G-WDZ19YEVET"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//   Stripe.setPublishableKey('your-stripe-publishable-key');


  const auth = firebase.auth();
  const db = firebase.firestore();
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  console.log("User is looged in")
} else {
  // No user is signed in.
  console.log("Not loggied ")
}
