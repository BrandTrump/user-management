import { useParams } from "react-router-dom";
import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import ViewSubmission from "../components/ViewSubmissions/ViewSubmission";

const MarkingPage = () => {
  const { candidate, id } = useParams();
  return (
    <div>
      <ViewSubmission candidateName={candidate} missionNum={id} />
      <MicrosoftSignOut />
    </div>
  );
};

export default MarkingPage;
