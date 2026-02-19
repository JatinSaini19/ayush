const ScreeningForm = ({ goBack }) => {
  return (
    <div className="employee-container">
      <div className="employee-card">
        <div className="employee-header">
          <button className="back-btn" onClick={goBack}>← Back</button>
          <h2>NCD Screening Form</h2>
        </div>
        <p>Screening Form Coming Soon...</p>
      </div>
    </div>
  );
};

export default ScreeningForm;
