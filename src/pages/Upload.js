import React, { useState } from "react";
import FileUpload from "../components/FileUpload/FileUpload";
import ViewSubmission from "../components/FileUpload/ViewSubmission";
import style from "../styles/Upload.module.css";

export const Upload = () => {
  const [missionNumber, setMissionNumber] = useState(1);
  return (
    <div className={style.container}>
      <div className={style.leftCol}>
        <h2>Mission {missionNumber} Submission</h2>
        <FileUpload missionNum={missionNumber} />
      </div>

      <div className={style.rightCol}>
        <ViewSubmission missionNum={missionNumber} />
      </div>
    </div>
  );
};
