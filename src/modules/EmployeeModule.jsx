import { useState } from "react";

const EmployeeModule = ({ goBack }) => {
  const [formData, setFormData] = useState({
    employeeId: "",
    fullName: "",
    gender: "",
    dob: "",
    contact: "",
    email: "",
    address: "",
    designation: "",
    cadre: "",
    posting: "",
    postingType: "",
    recruitmentSource: "",
    joiningService: "",
    joiningOffice: "",
    serviceStatus: "",
    qualification: "",
    specialization: "",
    councilReg: "",
    training: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("employeeData", JSON.stringify(formData));
    alert("Employee Data Saved Successfully ✅");
  };

  return (
  <div className="employee-container">
    <div className="employee-card">

      <div className="employee-header">
        <button className="back-btn" onClick={goBack}>
          ← Back
        </button>
        <h2>Employee Management</h2>
      </div>

      <form onSubmit={handleSubmit} className="employee-form-grid">

        {/* Basic Info */}
        <h3 className="section-title">Basic Employee Information</h3>

        <input name="employeeId" placeholder="Employee ID" onChange={handleChange} />
        <input name="fullName" placeholder="Full Name" onChange={handleChange} />

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="date" name="dob" onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input name="email" placeholder="Email ID" onChange={handleChange} />
        <input name="address" placeholder="Residential Address" onChange={handleChange} />

        {/* Employment */}
        <h3 className="section-title full-width">Employment Details</h3>

        <input name="designation" placeholder="Designation" onChange={handleChange} />
        <input name="cadre" placeholder="Cadre/Discipline" onChange={handleChange} />
        <input name="posting" placeholder="Current Posting" onChange={handleChange} />
        <input name="postingType" placeholder="Posting Type" onChange={handleChange} />
        <input name="recruitmentSource" placeholder="Recruitment Source" onChange={handleChange} />
        <input type="date" name="joiningService" onChange={handleChange} />
        <input type="date" name="joiningOffice" onChange={handleChange} />
        <input name="serviceStatus" placeholder="Service Status" onChange={handleChange} />

        {/* Qualification */}
        <h3 className="section-title full-width">Qualification & Training</h3>

        <input name="qualification" placeholder="Educational Qualification" onChange={handleChange} />
        <input name="specialization" placeholder="Specialization" onChange={handleChange} />
        <input name="councilReg" placeholder="Council Registration No." onChange={handleChange} />
        <input name="training" placeholder="Trainings Attended" onChange={handleChange} />

        <div className="full-width">
          <button type="submit" className="save-btn">
            Save Employee Data
          </button>
        </div>

      </form>
  </div>
    </div>
  );
  
};

export default EmployeeModule;
