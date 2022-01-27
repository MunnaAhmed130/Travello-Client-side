import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, } from "firebase/auth";
import InitializeFirebase from '../Firebase/Firebase.init';


InitializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleRegistration = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('')
                const user = userCredential.user;
                // setUser(user)
                console.log(user)
                // ...
            })
            .catch((error) => {
                setError(error.message);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                // ...
            });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
                // ...
            } else {
                // User is signed out
                setUser({})
                // ...
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, [auth])


    const handleEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        error,
        handleRegistration,
        handleLogin,
        handleGoogleLogin,
        handleEmailVerification,
        logOut
    }
};

export default useFirebase;