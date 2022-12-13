import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import CandidateSubmissions from "./pages/CandidateSubmissions";
import { RTemplate } from "./pages/RubricTemplate";
import { Login } from "./pages/Login";
import Submission from "./pages/Submission";
import { Upload } from "./pages/Upload";
import MarkingPage from "./pages/MarkingPage";
import { UserManagement } from "./pages/UserManagement";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import SelectMissionForMarking from "./pages/SelectMissionForMarking";
import PermissionDenied from "./pages/PermissionDenied";
import FPublishedRubric from "./pages/FPublishedRubric";
import styles from "./App.module.css";
import LearningObjectives from "./pages/LearningObjectives";
import PublishRubric from "./pages/PublishRubric";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.page}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route
                exact
                path="/user-management"
                element={<UserManagement />}
              />
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
              <Route
                exact
                path="/rubric-template/page-1"
                element={<RTemplate />}
              />
              <Route
                exact
                path="/rubric-template/page-2"
                element={<LearningObjectives />}
              />
              <Route
                exact
                path="/rubric-template/page-3"
                element={<PublishRubric />}
              />
              <Route
                exact
                path="/find-rubrics"
                element={<FPublishedRubric />}
              />
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="/denied" element={<PermissionDenied />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
