import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "./MicrosoftLogin.module.css";

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
    <div className={styles.container}>
      <button onClick={() => handleMicrosoftSignOut()} className={styles.login}>
        SIGN OUT
      </button>
    </div>
  );
}
