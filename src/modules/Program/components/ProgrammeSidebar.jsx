import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaCalendarAlt,
  FaUsers,
  FaBullhorn,
  FaCamera,
  FaTasks,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

export default function ProgrammeSidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`prog-sidebar ${open ? "show" : ""}`}>
        
        {/* Title */}
        <h3 className="side-title">
          Programme Activities <br /> and Its Tracking
        </h3>

        {/* Menu */}
        <div className="side-menu">

          <div className="side-card" onClick={() => navigate("/programme-dashboard/Programme")}>
            <FaLeaf style={{ marginRight: "8px" }} />
            Programme
          </div>

          <div className="side-card" onClick={() => navigate("/programme-dashboard/event")}>
            <FaCalendarAlt style={{ marginRight: "8px" }} />
            Event
          </div>

          <div className="side-card" onClick={() => navigate("/programme-dashboard/participation")}>
            <FaUsers style={{ marginRight: "8px" }} />
            Participation
          </div>

          <div className="side-card" onClick={() => navigate("/programme-dashboard/iec")}>
            <FaBullhorn style={{ marginRight: "8px" }} />
            IEC
          </div>

          <div className="side-card" onClick={() => navigate("/programme-dashboard/photos")}>
            <FaCamera style={{ marginRight: "8px" }} />
            Photos
          </div>

          <div className="side-card" onClick={() => navigate("/programme-dashboard/activity")}>
            <FaTasks style={{ marginRight: "8px" }} />
            Activity
          </div>

          <div className="side-card" onClick={() => navigate("/programme-dashboard/approvals")}>
            <FaCheckCircle style={{ marginRight: "8px" }} />
            Approvals
          </div>

        </div>

        {/* Logout */}
        <div className="side-card logout" onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: "8px" }} />
          Logout
        </div>

      </div>
    </>
  );
}