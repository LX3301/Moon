import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_black.png";
import "./header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobile(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobile(false)}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobile(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobile(false)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobile(false)}
          >
            Career
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobile(false)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={handleToggleMenu}>
        {isMobile ? "✖️" : "☰"}
      </button>
    </nav>
  );
};

export default Header;
