/* eslint-disable react/prop-types */

import "./Sidebar.css";
import { SidebarData } from "../../../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

function Sidebar() {
  const [selected, setSelected] = useState(0);
  const { setAuthenticated } = useAuth();

  // Function to handle menu item click
  function handleClick(index) {
    setSelected(index);
    // If logout item is clicked, set authentication status to false
    if (index == 2) {
      setAuthenticated(false);
    }
  }

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span>Menu</span>
      </div>

      {/* Menu items */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            heading={item.heading}
            isActive={selected == index}
            route={item.route}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

// Menu item component
function MenuItem({ icon: Icon, heading, isActive, route, onClick }) {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to={`${route}`}>
      <div
        onClick={onClick}
        className={isActive ? "menuItem active" : "menuItem"}
      >
        <Icon /> {/* Render the icon component */}
        <span>{heading}</span>
      </div>
    </Link>
  );
}

export default Sidebar;
