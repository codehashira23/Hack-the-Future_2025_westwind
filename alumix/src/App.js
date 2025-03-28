import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import SignUpForm from "./login/signup.jsx";
import SignInForm from "./login/login";
// import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login/:role" element={<Login />} /> */}
        <Route path="/sign" element={<SignUpForm />} />
        <Route path="/login" element={<SignInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
