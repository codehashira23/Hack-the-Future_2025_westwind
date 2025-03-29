import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuItems } from "./data";
import NavItem from "../student-components/NavItem";
import { Tooltip } from "react-tooltip";
import "../student-components/sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="sidebar-container">
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 240 : 60 }}
        transition={{ duration: 0.4 }}
        id="sidebar"
      >
        <button id="sidebar-toggle" onClick={() => setIsOpen((prev) => !prev)} />
        <nav id="sidebar-nav" className={!isOpen ? "no-scrollbar" : ""}>
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              text={item.text}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              onClick={() => setActiveSection(item.section)}
            />
          ))}
        </nav>
      </motion.div>
      {!isOpen && <Tooltip id="sidebar-tooltip" offset={40} />}
    </div>
  );
};

export default Sidebar; 