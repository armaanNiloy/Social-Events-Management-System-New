import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { clearStorage } from "../utilities/localstorage";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        clearStorage();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        clearStorage();
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
        clearStorage();
        return signInWithPopup(auth, provider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('on auth state change user', createUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        signInGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;