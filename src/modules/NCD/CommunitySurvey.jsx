const CommunitySurvey = ({ goBack }) => {
  return (
    <div className="employee-container">
      <div className="employee-card">
        <div className="employee-header">
          <button className="back-btn" onClick={goBack}>← Back</button>
          <h2>Community Survey</h2>
        </div>
        <p>Community Module Coming Soon...</p>
      </div>
    </div>
  );
};

export default CommunitySurvey;
