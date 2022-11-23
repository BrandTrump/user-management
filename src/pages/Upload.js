import React, { useState } from "react";
import FileUpload from "../components/FileUpload/FileUpload";

export const Upload = () => {
  const [missionNumber, setMissionNumber] = useState(1);
  return (
    <div>
      <h2>Mission {missionNumber} Submission</h2>
      <FileUpload missionNum={missionNumber} />
    </div>
  );
};
