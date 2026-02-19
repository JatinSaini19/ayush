const ReferralTracking = ({ goBack }) => {
  return (
    <div className="employee-container">
      <div className="employee-card">
        <div className="employee-header">
          <button className="back-btn" onClick={goBack}>← Back</button>
          <h2>Referral & Follow-Up</h2>
        </div>
        <p>Referral Module Coming Soon...</p>
      </div>
    </div>
  );
};

export default ReferralTracking;
