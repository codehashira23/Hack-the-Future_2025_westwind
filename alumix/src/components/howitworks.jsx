import React from "react";
import "../styles/howitworks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>Get Started in 3 Easy Steps</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Sign Up</h3>
          <p>Create your profile and find the perfect mentor.</p>
        </div>
        <div className="step">
          <h3>2. Connect</h3>
          <p>Schedule calls, chat, and get expert guidance.</p>
        </div>
        <div className="step">
          <h3>3. Achieve</h3>
          <p>Track progress and achieve your goals faster.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
