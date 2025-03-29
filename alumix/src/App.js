import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import SignInForm from "./login/login.js";
import SignUp from "./login/Signup";
// import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login/:role" element={<Login />} /> */}
        <Route path="/login" element={<SignInForm />} />
        <Route path="/test" element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;
