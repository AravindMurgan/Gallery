import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0z_bHcG3XJkNEbVus2cIfTghAFN9ddNI",
    authDomain: "fir-gallery-ab434.firebaseapp.com",
    projectId: "fir-gallery-ab434",
    storageBucket: "fir-gallery-ab434.appspot.com",
    messagingSenderId: "537135805294",
    appId: "1:537135805294:web:fbb4908b15733b29c4c77f"
};

console.log('FIREBASE:::', firebase);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp }