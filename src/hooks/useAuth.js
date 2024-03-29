import { useState, useEffect } from '../Utils/exports'
import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGooglePopup } from "../Utils/Firebase";

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        });
        return () => unsubscribe();
        // signInWithGooglePopup()
    }, [])

    return currentUser;
}
