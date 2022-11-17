import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";
import UMScreen from '../components/UmScreen/UMScreen.tsx'

export const UserManagement = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <h1>User Management</h1>
      <UMScreen />
      <MicrosoftSignOut setIsAuth={setIsAuth} />
    </>
  );
};
