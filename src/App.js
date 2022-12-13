import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidate from "./pages/Candidate";
import { RTemplate } from "./pages/RubricTemplate";
import { Login } from "./pages/Login";
import { UserManagement } from "./pages/UserManagement";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import FPublishedRubric from "./pages/FPublishedRubric";
import styles from "./App.module.css"
import LearningObjectives from "./pages/LearningObjectives";
import PublishRubric from "./pages/PublishRubric";

function App() {
  return (
    <>
      <BrowserRouter>

        <div className={styles.page}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/user-management" element={<UserManagement />} />
            <Route exact path="/candidate" element={<Candidate />} />
            <Route exact path="/rubric-template/page-1" element={<RTemplate />} />
            <Route exact path="/rubric-template/page-2" element={<LearningObjectives />} />
            <Route exact path="/rubric-template/page-3" element={<PublishRubric />} />
            <Route exact path="/find-rubrics" element={<FPublishedRubric />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
