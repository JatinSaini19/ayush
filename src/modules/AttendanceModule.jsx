import { useState, useEffect } from "react";

const AttendanceModule = ({ goBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    mobile: "",
    ssoId: "",
    status: "",
    leaveType: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("attendanceData");
    if (saved) {
      setSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("attendanceData", JSON.stringify(formData));
    setSubmitted(true);
  };

  return (
    <div className="employee-container">
      <div className="employee-card">

        <div className="employee-header">
          <button className="back-btn" onClick={goBack}>
            ← Back
          </button>
          <h2>Attendance Register</h2>
        </div>

        {submitted ? (
          <div style={{ color: "#1b5e20", fontWeight: "600" }}>
            ✅ Attendance already submitted. Cannot modify.
          </div>
        ) : (
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

            <select
              name="status"
              onChange={handleChange}
              required
            >
              <option value="">Present / On Leave</option>
              <option value="Present">Present</option>
              <option value="Leave">On Leave</option>
            </select>

            <select
              name="leaveType"
              onChange={handleChange}
            >
              <option value="">Leave Type</option>
              <option value="EL">EL</option>
              <option value="CL">CL</option>
              <option value="ML">ML</option>
              <option value="Other">Other</option>
            </select>

            <div className="full-width">
              <button type="submit" className="save-btn">
                Submit Attendance
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default AttendanceModule;
