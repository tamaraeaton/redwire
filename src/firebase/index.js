import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';

const config = {
    apiKey: "AIzaSyDv_YjzDU3Nn_XAh6eKn6kcTHbzld3C7cw",
    authDomain: "redwire-f6472.firebaseapp.com",
    projectId: "redwire-f6472",
    storageBucket: "redwire-f6472.appspot.com",
    messagingSenderId: "1094198136746",
    appId: "1:1094198136746:web:26282b1da660adb75065d3",
    measurementId: "G-H450V884M6"
}

firebase.initializeApp(config);

// ISS - after registering, The uid authenticates, but the app does not navigate to homescreen 
// added per https://stackoverflow.com/questions/65594133/react-native-to-firestore-firestore-8-2-1-connection-webchannel-transport-er
firebase.firestore().settings({ experimentalForceLongPolling: true });

const DB = firebase.firestore();
const usersCollection = DB.collection('users');
const articlesCollection = DB.collection('articles');

export {
    firebase, 
    usersCollection, 
    articlesCollection
}