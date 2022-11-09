import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";

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
    <>
      <button onClick={() => handleMicrosoftLogin()}>Login</button>
    </>
  );
}
