import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import styles from "./MicrosoftLogin.module.css";

export default function MicrosoftLogin({ setIsAuth }) {
  const handleMicrosoftLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        console.log(result);
      })
      .catch((error) => {
        // Handle error.
        console.log(error.message);
      });
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleMicrosoftLogin()} className={styles.login}>
        LOGIN
      </button>
    </div>
  );
}
