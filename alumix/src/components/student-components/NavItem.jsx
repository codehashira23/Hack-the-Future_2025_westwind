import React from "react";
import "./navitem.css"; 

const NavItem = ({ icon, text, isOpen, setIsOpen, onClick }) => {
  return (
    <div 
      className="nav-item" 
      onClick={() => {
        setIsOpen((prev) => !prev);
        onClick(); // Update active section
      }}
    >
      <span
        data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
        data-tooltip-content={!isOpen ? text : undefined}
        className="nav-icon"
      >
        {icon}
      </span>
      {isOpen && <div className="nav-text">{text}</div>}
    </div>
  );
};

export default NavItem;
