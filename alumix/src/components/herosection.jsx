import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/herosection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="hero">
      <h1>Supercharge your career with <span className="highlight">Long Term Mentorship</span></h1>
      <p>Connect with industry experts and accelerate your journey</p>
      <button 
        className="cta-button"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
