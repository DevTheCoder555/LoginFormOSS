import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/form.css";

const ResidencyForm = ({ formData, updateForm, onBack, onSubmit }) => {
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = () => {
    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }
    onSubmit();
    recaptchaRef.current.reset();
  };

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
        <label>Residency Status</label>
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

      <ReCAPTCHA
        sitekey="6Lfmof4rAAAAAAcSyvnJU_7G8oVqsgKNT2jEfdJb"
        onChange={onCaptchaChange}
        ref={recaptchaRef}
      />

      <div className="form-buttons">
        <button type="button" className="form-button" onClick={onBack}>
          Back
        </button>
        <button type="button" className="form-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ResidencyForm;
