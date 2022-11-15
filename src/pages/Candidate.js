import MicrosoftSignOut from "../components/MicrosoftSignOut";
import { useState } from "react";
import MicrosoftLogin from "../components/MicrosoftLogin";

const Candidate = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <h1>Candidate Page</h1>
      {!isAuth ? (
        <MicrosoftLogin setIsAuth={setIsAuth} />
      ) : (
        <MicrosoftSignOut setIsAuth={setIsAuth} />
      )}
    </>
  );
};

export default Candidate;
