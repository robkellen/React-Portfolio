import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav class="navbar navbar-expand-lg navbar-light trn">
      <span class="navbar-brand mb-1 h1">
        <a href="index.html">
          <img src="./Assets/BrandLogo.png" alt="brand logo" />
        </a>
      </span>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon custom-toggler"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <Link
              to="/About"
              className={
                location.pathname === "/About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/Portfolio"
              className={
                location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
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