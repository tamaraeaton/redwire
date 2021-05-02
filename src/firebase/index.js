import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';

const config = {
    apiKey: "AIzaSyB4esjS7IJ7IXLmh0YsrxooE8eENDyp6c4",
    authDomain: "redwire-311916.firebaseapp.com",
    projectId: "redwire-311916",
    storageBucket: "redwire-311916.appspot.com",
    messagingSenderId: "982925320889",
    appId: "1:982925320889:web:8f97b7cef60a2d50f7b168",
    measurementId: "G-L4M1Q7YE1C"
}

firebase.initializeApp(config);

// ISS - after registering, The uid authenticates, but the app does not navigate to homescreen 
// added per https://stackoverflow.com/questions/65594133/react-native-to-firestore-firestore-8-2-1-connection-webchannel-transport-er
firebase.firestore().settings({ experimentalForceLongPolling: true });

const DB = firebase.firestore();
const usersCollection = DB.collection('users');

export {firebase, usersCollection}