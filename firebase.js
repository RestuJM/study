import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB31K28nVCF7oU-p-EbdtUsXJQ5suFCLKI",
    authDomain: "study-4b5e7.firebaseapp.com",
    projectId: "study-4b5e7",
    storageBucket: "study-4b5e7.appspot.com",
    messagingSenderId: "362507346842",
    appId: "1:362507346842:web:349fe3c8a622cf4d7d9023"
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const db = getDatabase(app);
const authentication = getAuth(app);

const registAuth = (email, password, name, imgUrl) => {
    createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
            // updateAuth(res.user.uid, name, imgUrl)
            res.user.displayName = name
            res.user.photoURL = imgUrl ? imgUrl : "https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png"
            console.log(res)
        })
        .catch((err) => Alert.alert('Attention', err.message))
}

const signInAuth = (email, password) => {
    signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {

            return res.user;
        })
        .catch((err) => Alert.alert('Attention', err.message))
}


export { db, authentication, registAuth, signInAuth }
