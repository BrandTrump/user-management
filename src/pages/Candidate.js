import { Link } from "react-router-dom";
import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";

const Candidate = () => {
  return (
    <>
      <h1>Candidate Page</h1>
      <Link to="/candidate/submission">Submit Work</Link>
      <MicrosoftSignOut />
    </>
  );
};

export default Candidate;
