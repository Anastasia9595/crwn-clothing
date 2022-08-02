
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZIXrXUTQPE0pqtXoCGNtyx1RamCk8yhE",
  authDomain: "shopping-db-71173.firebaseapp.com",
  projectId: "shopping-db-71173",
  storageBucket: "shopping-db-71173.appspot.com",
  messagingSenderId: "385289857034",
  appId: "1:385289857034:web:174d4808d9a762689b97f3"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePop = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
        } catch (error) {
            console.error('Error creating user document', error);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) {
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password);

}