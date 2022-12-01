import { BrowserRouter, Routes, Route } from "react-router-dom";
import MissionSelect from "./components/FileUpload/MissionSelect";
import Candidate from "./pages/Candidate";
import CandidateSubmissions from "./pages/CandidateSubmissions";
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
            <Route
              exact
              path="/submissions"
              element={<CandidateSubmissions />}
            />
            <Route exact path="/submission" element={<MissionSelect />} />
            <Route exact path="/submission/mission/:id" element={<Upload />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
