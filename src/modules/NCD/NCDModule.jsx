import { useState } from "react";
import SurveyPlanning from "./SurveyPlanning";
import ScreeningForm from "./ScreeningForm";
import ReferralTracking from "./ReferralTracking";
import CommunitySurvey from "./CommunitySurvey";

const NCDModule = () => {
  const [activeSection, setActiveSection] = useState(null);

  if (!activeSection) {
    return (
      <div className="employee-container">
        <div className="employee-card">
          <h2 className="hr-title">NCD Survey Module</h2>

          <div className="hr-grid">
            <div className="hr-card-modern" onClick={() => setActiveSection("planning")}>
              🗂
              <span>Survey Planning</span>
            </div>

            <div className="hr-card-modern" onClick={() => setActiveSection("screening")}>
              🩺
              <span>NCD Screening Form</span>
            </div>

            <div className="hr-card-modern" onClick={() => setActiveSection("referral")}>
              📄
              <span>Referral & Follow-Up</span>
            </div>

            <div className="hr-card-modern" onClick={() => setActiveSection("community")}>
              🏘
              <span>Community Survey</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === "planning")
    return <SurveyPlanning goBack={() => setActiveSection(null)} />;

  if (activeSection === "screening")
    return <ScreeningForm goBack={() => setActiveSection(null)} />;

  if (activeSection === "referral")
    return <ReferralTracking goBack={() => setActiveSection(null)} />;

  if (activeSection === "community")
    return <CommunitySurvey goBack={() => setActiveSection(null)} />;

  return null;
};

export default NCDModule;
