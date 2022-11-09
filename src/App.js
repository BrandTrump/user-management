import { useState } from "react";
import MicrosoftLogin from "./components/MicrosoftLogin";
import MicrosoftSignOut from "./components/MicrosoftSignOut";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <div> User Management & User Login</div>
      {!isAuth ? (
        <MicrosoftLogin setIsAuth={setIsAuth} />
      ) : (
        <MicrosoftSignOut setIsAuth={setIsAuth} />
      )}
    </>
  );
}

export default App;
