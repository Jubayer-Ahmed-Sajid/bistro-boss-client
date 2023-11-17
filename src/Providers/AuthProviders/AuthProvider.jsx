import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Config/Firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        });
        return () => {
            return unSubscribe()
        }
    }, [])

    const createUser = (name,email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userUpdateProfile = (name,photo)=> {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    const signOutUser = () => {

        return signOut(auth)

    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        user, loading, createUser, signIn, signOutUser, signInWithGoogle,userUpdateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;