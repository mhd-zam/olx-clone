import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-YhqPTxVJ8KGfaXJQVqKO_7zgrPy6Sys",
    authDomain: "olx-clone-f2dd1.firebaseapp.com",
    projectId: "olx-clone-f2dd1",
    storageBucket: "olx-clone-f2dd1.appspot.com",
    messagingSenderId: "808387965878",
    appId: "1:808387965878:web:49932a6da8bad041524717",
    measurementId: "G-ZDDGZ1NH9Y"
};
  export default  firebase.initializeApp(firebaseConfig)