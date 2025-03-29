import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import "./dashboard.css";

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar></Navbar>  
      <h1>Student Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/student/mentorship">Find a Mentor</Link>
        <Link to="/student/jobs">Job Board</Link>
        <Link to="/student/events">Events</Link>
        <Link to="/student/discussions">Discussions</Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
