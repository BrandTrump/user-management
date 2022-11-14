import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import { Login } from "./pages/Login";
import { UserManagement } from "./pages/UserManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/candidate" element={<Candidate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
