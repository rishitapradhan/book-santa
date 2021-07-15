import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCeU2KoB3X9J4Yhb_WIU6WDwl0nlg3Wbh8",
    authDomain: "book-santa-99059.firebaseapp.com",
    projectId: "book-santa-99059",
    storageBucket: "book-santa-99059.appspot.com",
    messagingSenderId: "796297616545",
    appId: "1:796297616545:web:6855a87013b61cf8e924e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();