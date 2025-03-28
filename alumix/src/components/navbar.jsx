import React from "react";
import "../styles/navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ALUMIX</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Mentors</a></li>
        <li><a href="#">Success Stories</a></li>
      </ul>
      <div class=" nav-buttons">
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
