import React from "react";
import MicrosoftSignOut from "../components/auth/MicrosoftSignOut";
import MissionSelect from "../components/FileUpload/MissionSelect";

const Submission = () => {
  return (
    <div>
      <h2>Mission Submission</h2>
      <MissionSelect />
      <MicrosoftSignOut />
    </div>
  );
};

export default Submission;
