import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import styles from "./MicrosoftLogin.module.css";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function MicrosoftLogin() {
  let navigate = useNavigate();

  const handleMicrosoftLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        console.log(result);
        isTrainer(result.user.email);
      })
      .catch((error) => {
        // Handle error.
        console.log(error.message);
      });
  };

  const isTrainer = async (result) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", result));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((q) => {
      console.log(q.data().role);
      q.data().role === "candidate"
        ? navigate("/candidate")
        : navigate("/user-management");
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
