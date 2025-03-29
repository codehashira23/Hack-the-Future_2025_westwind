import React, { useState } from "react";
import Sidebar from "../components/student-components/sidebar";
import "./dashboard.css";
import { Posts, ExploreMentor, Profile } from "./sections"; // Import section components

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("Posts"); // Default section

  return (
    <div id="dashboard-container">
      <div id="dashboard-flex">
        <Sidebar setActiveSection={setActiveSection} />
        <div id="dashboard-main">
          <h1>Stay Organized, Stay Productive</h1>

          <div className="dashboard-sections">
            {activeSection === "Posts" && <Posts />}
            {activeSection === "ExploreMentor" && <ExploreMentor />}
            {activeSection === "Profile" && <Profile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
