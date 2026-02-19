import { useState } from "react";

const MovementModule = ({ goBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobile: "",
    ssoId: "",
    location: "",
    datetime: "",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("movementData", JSON.stringify(formData));
    alert("Movement Registered Successfully ✅");
  };

  return (
    <div className="employee-container">
      <div className="employee-card">

        <div className="employee-header">
          <button className="back-btn" onClick={goBack}>
            ← Back
          </button>
          <h2>Movement Register</h2>
        </div>

        <form onSubmit={handleSubmit} className="employee-form-grid">

          <input
            name="name"
            placeholder="Staff Name"
            onChange={handleChange}
            required
          />

          <input
            name="designation"
            placeholder="Designation"
            onChange={handleChange}
            required
          />

          <input
            name="mobile"
            placeholder="Mobile No"
            onChange={handleChange}
            required
          />

          <input
            name="ssoId"
            placeholder="SSO Employee ID"
            onChange={handleChange}
            required
          />

          <input
            name="location"
            placeholder="Where to Go"
            onChange={handleChange}
            required
          />

          <input
            type="datetime-local"
            name="datetime"
            onChange={handleChange}
            required
          />

          <select
            name="reason"
            onChange={handleChange}
            required
          >
            <option value="">Reason</option>
            <option value="Official">Official</option>
            <option value="Invited">Invited</option>
            <option value="Other">Other</option>
          </select>

          <div className="full-width">
            <button type="submit" className="save-btn">
              Submit Movement
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default MovementModule;
