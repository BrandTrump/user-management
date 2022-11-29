import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setPending(false);
      } else {
        setPending(false);
      }
    });
  }, []);

  console.log("Private routes:", isAuth);
  if (pending) {
    return <>Loading...</>;
  }
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
