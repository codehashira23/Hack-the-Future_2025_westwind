import React, { useState } from "react";
import Sidebar from "../components/alumni-components/sidebar";
import "../divyansh-student/dashboard.css";
import Posts from "../divyansh-student/components/Posts";
import Mentorship from "./components/Mentorship";
import Profile from "./components/Profile";

const AlumniDashboard = () => {
  const [activeSection, setActiveSection] = useState("Posts"); // Default section

  return (
    <div id="dashboard-container">
      <div id="dashboard-flex">
        <Sidebar setActiveSection={setActiveSection} />
        <div id="dashboard-main">
          <h1>Welcome Back, Alumni</h1>

          <div className="dashboard-sections">
            {activeSection === "Posts" && <Posts />}
            {activeSection === "Mentorship" && <Mentorship />}
            {activeSection === "Profile" && <Profile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard; 