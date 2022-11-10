import MicrosoftLogin from "../components/MicrosoftLogin";
import MicrosoftSignOut from "../components/MicrosoftSignOut";
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
