import MicrosoftSignOut from "../components/MicrosoftSignOut";
import { useState } from "react";

const Candidate = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <h1>Candidate Page</h1>
      <MicrosoftSignOut setIsAuth={setIsAuth} />
    </>
  );
};

export default Candidate;
