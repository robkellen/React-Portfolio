import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../assets/BrandLogo.png";

function Navbar() {
  
  // using state to make hamburger toggle icon functional
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light trn">
      <span className="navbar-brand mb-1 h1">
        <Link to="/">
          <img src={brandLogo} alt="BrandLogo" />
        </Link>
      </span>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon custom-toggler"></span>
      </button>
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <NavLink
              className="navLink"
              to="/About"
              activeClassName="selected"
              style={{
                color: "#0b8911",
                fontWeight: 300,
                fontSize: "20px",
                float: "right",
              }}
              activeStyle={{
                fontWeight: 500,
              }}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink"
              to="/Portfolio"
              activeClassName="selected"
              style={{
                color: "#0b8911",
                fontWeight: 300,
                fontSize: "20px",
                float: "right",
              }}
              activeStyle={{
                fontWeight: 500,
              }}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navLink"
              to="/Contact"
              activeClassName="selected"
              style={{
                color: "#0b8911",
                fontWeight: 300,
                fontSize: "20px",
                float: "right",
              }}
              activeStyle={{
                fontWeight: 500,
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
