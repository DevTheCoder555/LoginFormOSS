function ResidencyForm({ onBack, onSubmit, formData, updateForm }) {
  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <h1 className="form-title">HOUR OF CODE</h1>
      <input
        type="text"
        placeholder="Contact Number"
        className="form-input"
        value={formData.contactNumber}
        onChange={(e) => updateForm("contactNumber", e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="form-input"
        value={formData.emailAddress}
        onChange={(e) => updateForm("emailAddress", e.target.value)}
        
      />

      <div className="form-row">
        <span>Residency Status</span>
        <label>
          <input
            type="radio"
            name="residency"
            value="hosteler"
            checked={formData.residency === "hosteler"}
            onChange={(e) => updateForm("residency", e.target.value)}
          />{" "}
          Hosteler
        </label>
        <label>
          <input
            type="radio"
            name="residency"
            value="day"
            checked={formData.residency === "day"}
            onChange={(e) => updateForm("residency", e.target.value)}
          />{" "}
          Day Scholar
        </label>
      </div>

      <div style={{ margin: "16px 0" }}>
        <input type="checkbox" /> I'm not a robot
      </div>

      <div className="form-buttons">
        <button type="button" className="form-button" onClick={onBack}>
          Back
        </button>
        <button type="button" className="form-button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}
export default ResidencyForm;
