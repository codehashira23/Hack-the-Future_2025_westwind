import React, { useState } from "react";
import Sidebar from "../components/student-components/sidebar";
import "./dashboard.css";
import Posts from "./components/Posts";
import ExploreMentor from "./components/ExploreMentor";
import Profile from "./components/Profile";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("Posts"); // Default section
  const [sidebarWidth, setSidebarWidth] = useState(60); // Default sidebar width

  return (
    <div id="dashboard-container">
      <div id="dashboard-flex">
        <Sidebar setActiveSection={setActiveSection} setSidebarWidth={setSidebarWidth} />
        <div id="dashboard-main" style={{ marginLeft: `${sidebarWidth}px` }}>
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
