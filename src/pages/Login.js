import MicrosoftLogin from "../components/auth/MicrosoftLogin";
import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {!isAuth ? (
        <MicrosoftLogin setIsAuth={setIsAuth} />
      ) : (
        <MicrosoftSignOut setIsAuth={setIsAuth} />
      )}
    </>
  );
};
