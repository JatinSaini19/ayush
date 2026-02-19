import { useState } from "react";
import "./ConstructionModule.css";

export default function ConstructionModule() {
  const [section, setSection] = useState("Basic");

  const renderContent = () => {
    switch (section) {
      case "Basic":
        return (
            <div className="form-section">
            <h3>Basic Details of Work</h3>
            <input placeholder="Type of Site" />
            <input placeholder="Name & Address" />
            <input placeholder="Geo Location (Lat/Long)" />
            <select><option>Land Ownership</option><option>Departmental</option><option>Donated</option></select>
            <input placeholder="Area of Land" />
            <input placeholder="Built Area" />
            <select><option>Type of Construction</option><option>New</option><option>Repair</option></select>
            <input type="file" />
          </div>
        );

      case "Pre":
        return (
          <div className="form-section">
            <h3>Pre-Construction Stage</h3>
            <input placeholder="Approved Budget" />
            <input placeholder="Working Agency" />
            <input placeholder="Contractor Details" />
            <input type="file" />
            <input placeholder="Timeline" />
          </div>
        );

      case "Construction":
        return (
          <div className="form-section">
            <h3>Construction Stage</h3>
            <select><option>Work Status</option><option>Started</option><option>Not Started</option></select>
            <input placeholder="Level of Work" />
            <input type="range" min="0" max="100" />
            <input placeholder="Safety Compliance" />
          </div>
        );

      case "Post":
        return (
          <div className="form-section">
            <h3>Post-Construction Stage</h3>
            <input placeholder="Testing Status" />
            <input placeholder="Final Inspection" />
            <input placeholder="Handover Status" />
          </div>
        );

      case "Reporting":
        return (
          <div className="form-section">
            <h3>Reporting & Monitoring</h3>
            <input placeholder="Overall Status" />
            <input placeholder="Timeline Adherence" />
            <input placeholder="Budget Performance" />
            <input placeholder="Challenges" />
            <input 音placeholder="Mitigation Actions" />
          </div>
        );

      default:
        return <h3>Select Section</h3>;
    }
  };

  return (
    <div className="construction-module">
      <div className="side-menu">
        <button onClick={() => setSection("Basic")}>Basic Details</button>
        <button onClick={() => setSection("Pre")}>Pre-Construction</button>
        <button onClick={() => setSection("Construction")}>Construction Stage</button>
        <button onClick={() => setSection("Post")}>Post-Construction</button>
        <button onClick={() => setSection("Reporting")}>Reporting</button>
      </div>

      <div className="content-area">
        {renderContent()}
        <button className="save-btn">💾 Save Construction Data</button>
      </div>
    </div>
  );
}
