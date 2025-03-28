import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Alumni Platform</h1>
      <p>Choose your login type:</p>
      <div className="button-group">
        <button onClick={() => navigate("/login/student")} className="btn student-btn">
          Student Login
        </button>
        <button onClick={() => navigate("/login/alumni")} className="btn alumni-btn">
          Alumni Login
        </button>
      </div>
    </div>
  );
};

export default Home;
