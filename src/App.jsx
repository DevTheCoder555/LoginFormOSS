import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import ResidencyForm from "./components/ResidencyForm";
import SuccessPage from "./components/SuccessPage";
import "./styles/App.css";
import Logo from "./components/Logo";
import Background from "./components/Background";

function App() {
  const [step, setStep] = useState(1);
  // Store form data centrally
  const [formData, setFormData] = useState({
    fullName: "",
    studentNo: "",
    gender: "",
    branch: "",
    domain: "",
    contactNumber: "",
    emailAddress: "",
    residency: "",
    isHuman: false,
  });

  // Update formData dynamically
  function updateForm(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="app-background">
      <Logo />
      <Background />
      
      {step === 1 && (
        <RegistrationForm
          formData={formData}
          updateForm={updateForm}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <ResidencyForm
          formData={formData}
          updateForm={updateForm}
          onBack={() => setStep(1)}
          onSubmit={() => setStep(3)}
        />
      )}
      {step === 3 && <SuccessPage />}
    </div>
  );
}

export default App;
