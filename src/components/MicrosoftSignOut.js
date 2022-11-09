import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function MicrosoftSignOut({ setIsAuth }) {
  const handleMicrosoftSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        setIsAuth(false);
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <>
      <button onClick={() => handleMicrosoftSignOut()}>Sign Out</button>
    </>
  );
}
