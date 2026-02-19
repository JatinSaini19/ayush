import { useState } from "react";
import "./UserDashboard.css";
import HRModule from "./modules/HRModule";
import NCDModule from "./modules/NCD/NCDModule";


export default function UserDashboard() {
  const [activeModule, setActiveModule] = useState("UserDashboard");

  const renderContent = () => {
    switch (activeModule) {
      case "HR":
        return <HRModule />;

      case "NCD":
        return <NCDModule />;

      default:
        return <div>Welcome to AYUSH Dashboard</div>;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>🌿AYUSH Modules</h3>
        <ul>
          <li onClick={() => setActiveModule("Herbal")}>
            🌱 Herbal Garden
          </li>

          <li onClick={() => window.open("/construction", "_blank")}>
            🏗 Construction Work
          </li>

          <li onClick={() => setActiveModule("HR")}>
            👨‍⚕️ HR Module
          </li>

          <li onClick={() => setActiveModule("IEC")}>
            📢 IEC & Branding
          </li>

          <li onClick={() => setActiveModule("Programme")}>
            📋 Programme Activities
          </li>

          <li onClick={() => setActiveModule("Yoga")}>
            🧘 Yoga Tracking
          </li>

          <li onClick={() => setActiveModule("NAM")}>
            📊 NAM Reporting
          </li>

          <li onClick={() => setActiveModule("NCD")}>
            ❤️ NCD Survey
          </li>
        </ul>
      </aside>

      <main className="content">
        {renderContent()}
      </main>
    </div>
  );
}
