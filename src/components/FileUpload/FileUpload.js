import React from "react";
import { useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const missionNum = 1;

const FileUpload = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const uploadFile = () => {
    if (fileUpload === null) return;
    const fileRef = ref(
      storage,
      `mission${missionNum}/${fileUpload.name + v4()}`
    );
    uploadBytes(fileRef, fileUpload).then(() => {
      alert("file uploaded");
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFileUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;
