import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import SignInForm from "./login/login.js";
import SignUp from "./login/Signup";
// import Profile from "./Profile Dashboard/dashboard.jsx";
// import Login from "./pages/Login";
import StudentDashboard from "./divyansh-student/dashboard.jsx";
import AlumniDashboard from "./divyansh-alumni/dashboard.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login/:role" element={<Login />} /> */}
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/alumni/dashboard" element={<AlumniDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
