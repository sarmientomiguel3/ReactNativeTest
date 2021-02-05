import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCIn0GUA0cvVndG_xyjI4x8EW2Dd7kotkY",
  authDomain: "react-native-firebase-4c8cb.firebaseapp.com",
  projectId: "react-native-firebase-4c8cb",
  storageBucket: "react-native-firebase-4c8cb.appspot.com",
  messagingSenderId: "373953672607",
  appId: "1:373953672607:web:405f0410a0bfcc54e7b9aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase, 
  db,
};
