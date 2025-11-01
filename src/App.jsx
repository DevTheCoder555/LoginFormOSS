import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import ResidencyForm from "./components/ResidencyForm";
import SuccessPage from "./components/SuccessPage";
import "./styles/App.css";
import Logo from "./components/Logo";

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
      <svg className="background-svg" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
  {/* Main hourglass lines */}
  <path d="M0,0 Q200,300 400,0" stroke="white" strokeOpacity="0.38" strokeWidth="2"/>
  <path d="M0,600 Q200,300 400,600" stroke="white" strokeOpacity="0.38" strokeWidth="2"/>

  {/* Additional hourglass curves for density and effect */}
  <path d="M40,0 Q200,300 360,0" stroke="white" strokeOpacity="0.26" strokeWidth="1.5"/>
  <path d="M40,600 Q200,300 360,600" stroke="white" strokeOpacity="0.26" strokeWidth="1.5"/>

  <path d="M80,0 Q200,300 320,0" stroke="white" strokeOpacity="0.20" strokeWidth="1.2"/>
  <path d="M80,600 Q200,300 320,600" stroke="white" strokeOpacity="0.20" strokeWidth="1.2"/>

  <path d="M120,0 Q200,300 280,0" stroke="white" strokeOpacity="0.16" strokeWidth="1"/>
  <path d="M120,600 Q200,300 280,600" stroke="white" strokeOpacity="0.16" strokeWidth="1"/>

  {/* Middle vertical and diagonal lines for geometric emphasis */}
  <path d="M200,0 Q200,300 200,600" stroke="white" strokeOpacity="0.18" strokeWidth="1"/>
  <path d="M0,0 Q200,600 400,0" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
  <path d="M0,600 Q200,0 400,600" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
</svg>

      <Logo />
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
