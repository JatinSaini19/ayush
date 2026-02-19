import { useState } from "react";

const SurveyPlanning = ({ goBack }) => {
  const [formData, setFormData] = useState({
    campaignName: "",
    ageGroup: "",
    gender: "",
    location: "",
    duration: "",
    frequency: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="employee-container">
      <div className="employee-card">

        <div className="employee-header">
          <button className="back-btn" onClick={goBack}>← Back</button>
          <h2>Survey Planning (State/District)</h2>
        </div>

        <form className="employee-form-grid">

          <input name="campaignName" placeholder="Campaign Name" onChange={handleChange} />

          <input name="ageGroup" placeholder="Target Age Group" onChange={handleChange} />

          <select name="gender" onChange={handleChange}>
            <option value="">Target Gender</option>
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input name="location" placeholder="Community / Location" onChange={handleChange} />

          <input type="date" name="duration" onChange={handleChange} />

          <select name="frequency" onChange={handleChange}>
            <option value="">Reporting Frequency</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>

        </form>

      </div>
    </div>
  );
};

export default SurveyPlanning;
