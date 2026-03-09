import React, { useState } from "react";
import "./ConstructionModule.css";

const IECBrandingModule = () => {

  const [activeTab, setActiveTab] = useState("planning");

  return (
    <div className="module-container">

      {/* LEFT SIDEBAR */}
      <div className="module-sidebar">
        <h2>IEC & Branding</h2>

        <button onClick={() => setActiveTab("planning")}>
          IEC Planning
        </button>

        <button onClick={() => setActiveTab("tasks")}>
          Assign IEC Tasks
        </button>

        <button onClick={() => setActiveTab("report")}>
          IEC Reporting
        </button>

        <button onClick={() => setActiveTab("branding")}>
          Branding Monitoring
        </button>

        <button onClick={() => setActiveTab("infra")}>
          Physical Branding
        </button>
      </div>

      {/* WORK AREA */}
      <div className="module-workarea">

        <div className="glass-card">

          <h2>IEC & Branding Activity Module</h2>

          {/* IEC Planning */}
          {activeTab === "planning" && (
            <>
              <input placeholder="State IEC Theme" />
              <input placeholder="Campaign Name" />
              <input placeholder="Branding Guidelines" />
              <input placeholder="Standard Templates" />
              <input type="file" />
            </>
          )}

          {/* Assign Tasks */}
          {activeTab === "tasks" && (
            <>
              <input placeholder="Assign to AAM Centers" />
              <input placeholder="Select Districts" />
              <input placeholder="Specific Center Name" />

              <select>
                <option>Select Campaign Type</option>
                <option>NCD</option>
                <option>Yoga</option>
                <option>AYUSH</option>
                <option>National Day</option>
              </select>

              <input type="date" />
              <input type="date" />

              <select>
                <option>Frequency</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Event Based</option>
              </select>
            </>
          )}

          {/* IEC Reporting */}
          {activeTab === "report" && (
            <>
              <input type="date" placeholder="Activity Date" />
              <input placeholder="Location" />

              <select>
                <option>Type of IEC Activity</option>
                <option>Posters Displayed</option>
                <option>Wall Painting</option>
                <option>Hoarding Installation</option>
                <option>Community Event</option>
                <option>School Awareness Activity</option>
                <option>Health Camp IEC</option>
              </select>

              <input placeholder="Material Type (Poster/Banner/Standee)" />
              <input placeholder="Quantity Used" />
              <input placeholder="Material Received vs Used" />

              <input type="file" multiple />
            </>
          )}

          {/* Branding Monitoring */}
          {activeTab === "branding" && (
            <>
              <select>
                <option>Branding Type</option>
                <option>AAM Signboards</option>
                <option>Front Facade Branding</option>
                <option>Inner Wall Branding</option>
                <option>Herbal Garden Signage</option>
                <option>Room Wise Branding</option>
                <option>Citizen Charter Display</option>
                <option>Staff Duty Display</option>
                <option>OPD / IPD Direction Boards</option>
              </select>

              <select>
                <option>Branding Completed</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <input placeholder="Work Pending Reason" />
              <input placeholder="Work Completion Percentage %" />

              <input type="file" multiple />
            </>
          )}

          {/* Physical Infrastructure Branding */}
          {activeTab === "infra" && (
            <>
              <input placeholder="Contractor Name" />
              <input placeholder="Sanctioning Authority" />
              <input type="date" placeholder="Start Date" />
              <input type="date" placeholder="Completion Date" />
              <input placeholder="Work Progress %" />
              <input type="file" />
            </>
          )}

          <button className="save-btn">
            💾 Save IEC & Branding Data
          </button>

        </div>

        {/* Table Section */}
        <div className="data-table">
          <div>Activity</div>
          <div>Location</div>
          <div>Branding Type</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

      </div>
    </div>
  );
};

export default IECBrandingModule;