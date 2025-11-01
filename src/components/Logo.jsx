import React from "react";
import oss from "../assets/oss.png"; // adjust path and file extension

const Logo = () => {
  return (
    <div style={{
      position: "fixed",
      top: "20px",
      left: "20px",
      zIndex: 1000,
    }}>
      <img src={oss} alt="Logo" style={{ width: "100px", height: "auto", cursor: "pointer" }} />
    </div>
  );
};

export default Logo;
