import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import { Login } from "./pages/Login";
import { Upload } from "./pages/Upload";
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
            <Route exact path="/upload" element={<Upload />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
