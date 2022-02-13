import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, } from "firebase/auth";
import InitializeFirebase from '../Firebase/Firebase.init';
import axios from 'axios';


InitializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleRegistration = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('')
                console.log(user)
                // ...
                // updating firebase profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    saveUser(email, name)
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                // Send a email verification
                handleEmailVerification();
                history('/')
            })
            .catch((error) => {
                setError(error.message);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const handleLogin = (email, password, history) => {
        setLoading(true);
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

    const handleGoogleLogin = (history, location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                saveGoogleUser(user.email, user.displayName)
                // ...
                const destination = location?.state?.from || '/';
                history(destination);
                setError('')
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                // ...
            }).finally(() => setLoading(false));
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

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('http://localhost:5000/users', user)
            .then()
    }
    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        axios.put('http://localhost:5000/users', user)
            .then()
    }

    return {
        user,
        error,
        handleRegistration,
        handleLogin,
        handleGoogleLogin,
        logOut
    }
};

export default useFirebase;