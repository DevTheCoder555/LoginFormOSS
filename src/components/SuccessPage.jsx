import React from "react";
import "../styles/form.css";

function SuccessPage() {
  return (
    <div className="form-container">
      <h1 className="form-title">Registered Successfully</h1>
      <div className="connect">
        <p>Connect with us</p>
        <li>
        <a
            href="https://www.instagram.com/team__oss?igsh=MTlhMmExbGM4MmVjMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-pink-400 transition duration-200"
          >
            Instagram @team__oss 
          </a>
          </li>
          <li>
        <a
            href="https://twitter.com/acm_akgec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-sky-300 transition duration-200"
          >
            TWITTER @acm_akgec
            
          </a>
          </li>
          <li>
              <a
            href="https://www.linkedin.com/company/team-oss/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400 transition duration-200"
          >
           Linkedin Team OSS
          </a>
          </li>
      </div>
    </div>
  );
}
export default SuccessPage;
