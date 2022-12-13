import React from "react";
import { useState } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const FileUpload = ({ missionNum }) => {
  const [fileUpload, setFileUpload] = useState(null);

  const uploadFile = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const candidateName = user.displayName;
        if (fileUpload === null) return;
        const fileRef = ref(
          storage,
          `mission${missionNum}/${candidateName}/${fileUpload.name + v4()}`
        );
        uploadBytes(fileRef, fileUpload).then(() => {
          alert("file uploaded");
        });
      } else {
        alert("Please sign-in");
      }
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
