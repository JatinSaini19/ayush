import ProgrammeSidebar from "./components/ProgrammeSidebar";
import { Routes, Route } from "react-router-dom";

import Programme from "./Programme";
import Event from "./Event";
import Participation from "./Participation";
import Photos from "./Photos";
import Activity from "./Activity";
import Approvals from "./Approvals";
import IEC from "./IEC";

import "./ProgrammeDashboard.css";

export default function ProgrammeDashboard() {
  return (
    <div className="dashboard-page">
      <ProgrammeSidebar />

      <div className="dashboard-main">
        <Routes>
          <Route path="programme" element={<Programme />} />
          <Route path="event" element={<Event />} />
          <Route path="participation" element={<Participation />} />
          <Route path="photos" element={<Photos />} />
          <Route path="activity" element={<Activity />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="iec" element={<IEC />} />
          
        </Routes>
      </div>
    </div>
  );
}