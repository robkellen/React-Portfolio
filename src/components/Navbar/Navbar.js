import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import brandLogo from "../../assets/BrandLogo.png";

function Navbar() {
  const location = useLocation();
  // using state to make hamburger toggle icon functional
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light trn"> 
      <span className="navbar-brand mb-1 h1">
        <a href="/">
          <img src={brandLogo} alt="BrandLogo" />
        </a>
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
            <Link
              to="/About"
              className={
                location.pathname === "/About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={
                location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={
                location.pathname === "/Contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
