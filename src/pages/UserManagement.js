import MicrosoftSignOut from "../components/MicrosoftSignOut";
import { useState } from "react";
import MicrosoftLogin from "../components/MicrosoftLogin";

export const UserManagement = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <h1>User Management</h1>
      {!isAuth ? (
        <MicrosoftLogin setIsAuth={setIsAuth} />
      ) : (
        <MicrosoftSignOut setIsAuth={setIsAuth} />
      )}
    </>
  );
};
