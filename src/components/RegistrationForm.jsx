function RegistrationForm({ onNext, formData, updateForm }) {
  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <h1 className="form-title">HOUR OF CODE</h1>
      <input
        type="text"
        placeholder="Full Name"
        className="form-input"
        value={formData.fullName}
        onChange={(e) => updateForm("fullName", e.target.value)}
      />
      <input
        type="text"
        placeholder="Student No"
        className="form-input"
        value={formData.studentNo}
        onChange={(e) => updateForm("studentNo", e.target.value)}
      />

      <div className="form-row">
        <span>Gender</span>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => updateForm("gender", e.target.value)}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => updateForm("gender", e.target.value)}
          />{" "}
          Female
        </label>
      </div>

<select
  className="form-input"
  value={formData.branch}
  onChange={(e) => updateForm("branch", e.target.value)}
  required
>
  <option value="" disabled>
    Select your branch
  </option>
  <option value="CSE">CSE</option>
  <option value="ECE">CS</option>
  <option value="ME">CSE-AIML</option>
  <option value="CE">AIML</option>
  <option value="EE">CSE-DS</option>
    <option value="EE">CS HINDI</option>
  <option value="EE">CSE-IT</option>
  <option value="EE">ECE</option>
  <option value="EE">EE</option>


</select>

 <select
  className="form-input"
  value={formData.domain}
  onChange={(e) => updateForm("domain", e.target.value)}
  required
>
    <option value="" disabled>Select your domain</option>
  <option value="DEVELOPER">DEVELOPER</option>
  <option value="DESIGNER">DESIGNER</option>
</select>


      <button type="button" className="form-button" onClick={onNext}>
        Next
      </button>
    </form>
  );
}
export default RegistrationForm;
