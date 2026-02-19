import { useState } from "react";
import EmployeeModule from "./EmployeeModule";
import AttendanceModule from "./AttendanceModule";
import MovementModule from "./MovementModule";

const HRModule = () => {
  const [activeHRModule, setActiveHRModule] = useState(null);

  if (!activeHRModule) {
    return (
      <div className="employee-container">
        <div className="employee-card">

          <h2 className="hr-title">Select HR Module</h2>

          <div className="hr-grid">
            <div
              className="hr-card-modern"
              onClick={() => setActiveHRModule("employee")}
            >
              👤
              <span>Employee Management</span>
            </div>

            <div
              className="hr-card-modern"
              onClick={() => setActiveHRModule("attendance")}
            >
              📝
              <span>Attendance Register</span>
            </div>

            <div
              className="hr-card-modern"
              onClick={() => setActiveHRModule("movement")}
            >
              🚶
              <span>Movement Register</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  if (activeHRModule === "employee")
    return <EmployeeModule goBack={() => setActiveHRModule(null)} />;

  if (activeHRModule === "attendance")
    return <AttendanceModule goBack={() => setActiveHRModule(null)} />;

  if (activeHRModule === "movement")
    return <MovementModule goBack={() => setActiveHRModule(null)} />;

  return null;
};

export default HRModule;
