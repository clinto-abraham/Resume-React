import { useState, useEffect, useContext } from "../utils/commons";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  // signInWithGooglePopup
} from "../utils/Firebase";
import { AuthContext } from "../context/AuthContext";
// import AuthContext from "../context/AuthContext";

function useAuth2() {
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

export default function useAuth() {
  return useContext(AuthContext);
}
