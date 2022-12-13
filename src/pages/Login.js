import MicrosoftLogin from "../components/auth/MicrosoftLogin";
import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      }
    });
  }, []);

  return <>{!isAuth ? <MicrosoftLogin /> : <MicrosoftSignOut />}</>;
};
