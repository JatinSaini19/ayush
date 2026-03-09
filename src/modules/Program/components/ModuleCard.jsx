import React from "react";
import { useNavigate } from "react-router-dom";

function ModuleCard({ name, path }) {
  const navigate = useNavigate();
  return (
    <div className="module-card" onClick={() => navigate(path)}>
      <h3>{name}</h3>
    </div>
  );
}

export default ModuleCard;
