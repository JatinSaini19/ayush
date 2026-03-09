import React, { useState } from "react";
import "./ConstructionModule.css";

const ConstructionPage = () => {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="module-container">

      {/* LEFT SIDEBAR */}
      <div className="module-sidebar">
        <h2>Construction Module</h2>

        <button onClick={() => setActiveTab("basic")}>
          Basic Details
        </button>

        <button onClick={() => setActiveTab("pre")}>
          Pre-Construction
        </button>

        <button onClick={() => setActiveTab("stage")}>
          Construction Stage
        </button>

        <button onClick={() => setActiveTab("post")}>
          Post-Construction
        </button>

        <button onClick={() => setActiveTab("report")}>
          Reporting
        </button>
      </div>

      {/* WORK AREA */}
      <div className="module-workarea">

        <div className="glass-card">

          <h2>Construction Work Module</h2>

          {activeTab === "basic" && (
            <>
              <input placeholder="Type of Site" />
              <input placeholder="Name & Address" />
              <input placeholder="Geo Location (Lat/Long)" />
              <select>
                <option>Land Ownership</option>
                <option>Government</option>
                <option>Private</option>
              </select>
              <input placeholder="Area of Land" />
              <input placeholder="Built Area" />
              <select>
                <option>Type of Construction</option>
                <option>New</option>
                <option>Renovation</option>
              </select>
              <input type="file" />
            </>
          )}

          {activeTab === "pre" && (
            <>
              <input placeholder="Approval Status" />
              <input placeholder="Tender Details" />
              <input placeholder="Budget Allocation" />
            </>
          )}

          {activeTab === "stage" && (
            <>
              <input placeholder="Foundation Work Status" />
              <input placeholder="Structural Work Status" />
              <input placeholder="Material Used" />
            </>
          )}

          {activeTab === "post" && (
            <>
              <input placeholder="Completion Date" />
              <input placeholder="Final Inspection Status" />
              <input placeholder="Handover Details" />
            </>
          )}

          {activeTab === "report" && (
            <>
              <input placeholder="Progress Percentage" />
              <input placeholder="Remarks" />
            </>
          )}

          <button className="save-btn">
            💾 Save Construction Data
          </button>

        </div>

        {/* Table Section */}
        <div className="data-table">
          <div>Type of Site</div>
          <div>Address</div>
          <div>Status</div>
          <div>Progress</div>
          <div>Actions</div>
        </div>

      </div>
    </div>
  );
};

export default ConstructionPage;
