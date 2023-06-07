import { useState, useEffect } from "../utils/commons";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  // signInWithGooglePopup
} from "../utils/Firebase";

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
    // signInWithGooglePopup()
  }, []);

  return currentUser;
}
