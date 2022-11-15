import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import { Login } from "./pages/Login";
import { UserManagement } from "./pages/UserManagement";
import { PrivateRoutes } from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/user-management" element={<UserManagement />} />
            <Route exact path="/candidate" element={<Candidate />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
