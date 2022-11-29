import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import UMScreen from "../components/UmScreen/UMScreen.tsx";

export const UserManagement = () => {
  return (
    <>
      <h1>User Management</h1>
      <UMScreen />
      <MicrosoftSignOut />
    </>
  );
};
