import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import CandidateSubmissions from "./pages/CandidateSubmissions";
import { Login } from "./pages/Login";
import Submission from "./pages/Submission";
import { Upload } from "./pages/Upload";
import MarkingPage from "./pages/MarkingPage";
import { UserManagement } from "./pages/UserManagement";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import SelectMissionForMarking from "./pages/SelectMissionForMarking";
import PermissionDenied from "./pages/PermissionDenied";

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
              element={<SelectMissionForMarking />}
            />
            <Route
              exact
              path="/submissions/mission/:missionID"
              element={<CandidateSubmissions />}
            />
            <Route
              exact
              path="/submissions/mission/:id/:candidate"
              element={<MarkingPage />}
            />
            <Route
              exact
              path="/candidate/submission"
              element={<Submission />}
            />
            <Route
              exact
              path="/candidate/submission/mission/:id"
              element={<Upload />}
            />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/denied" element={<PermissionDenied />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
