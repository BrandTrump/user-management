import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateCandidateRoutes = () => {
  const [candidate, setCandidate] = useState(
    localStorage.getItem("role") === "Candidate" ? true : null
  );
  return candidate ? <Outlet /> : <Navigate to="/" />;
};
