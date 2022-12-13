import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import { useState } from "react";
import RubricTemplate from "../components/rubric-template/RubricTemplate.tsx";


export const RTemplate = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>

      <RubricTemplate />
      <MicrosoftSignOut setIsAuth={setIsAuth} />
    </>
  );
};
