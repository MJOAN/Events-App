import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxWQ_VrztOlD2iPK3Yq_JoldGoB-vrqJQ",
  authDomain: "events-app-220700.firebaseapp.com",
  databaseURL: "https://events-app-220700.firebaseio.com",
  projectId: "events-app-220700",
  storageBucket: "events-app-220700.appspot.com",
  messagingSenderId: "513556123184"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

// const firebase = firebase.firestore();
// const settings = {
//   timestampsInSnapshots: true
// };
// firestore.settings(settings);
