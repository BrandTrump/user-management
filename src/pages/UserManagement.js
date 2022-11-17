import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";

export const UserManagement = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <h1>User Management</h1>
      <MicrosoftSignOut setIsAuth={setIsAuth} />
    </>
  );
};
