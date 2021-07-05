import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBrRUEI3BtNydtqwVtCjAW190C-bkopkVM",
    authDomain: "linkedin-clone-656f5.firebaseapp.com",
    projectId: "linkedin-clone-656f5",
    storageBucket: "linkedin-clone-656f5.appspot.com",
    messagingSenderId: "699041990423",
    appId: "1:699041990423:web:3b0dc357a90d049f50d952"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;