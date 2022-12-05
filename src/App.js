import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import CandidateSubmissions from "./pages/CandidateSubmissions";
import { Login } from "./pages/Login";
import Submission from "./pages/Submission";
import { Upload } from "./pages/Upload";
import MarkingPage from "./pages/MarkingPage";
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
              path="trainer/submissions"
              element={<CandidateSubmissions />}
            />
            <Route
              exact
              path="/submissions/candidate/:candidate/:id"
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
