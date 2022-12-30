// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDbs8sPVCyjK_gZzgSEiPq946WWYlh0xwQ",
  authDomain: "wt-clone-3370b.firebaseapp.com",
  projectId: "wt-clone-3370b",
  storageBucket: "wt-clone-3370b.appspot.com",
  messagingSenderId: "586847263701",
  appId: "1:586847263701:web:673af3af23d261908dbb5c"
};

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

