import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import brandLogo from "../../assets/BrandLogo.png";

function Navbar() {
  // using state to make hamburger toggle icon functional
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  //using state to make navbar "sticky" once it appears
  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0); // eslint-disable-line
  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 900 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="topBar" className={barVisibility ? "showBar" : "hideBar"}>
      <nav className="navbar navbar-expand-lg navbar-light trn fixed-top">
        <span className="navbar-brand mb-1 h1">
          <Link to="home" spy={true} smooth={true} offset={50} duration={700}>
            <img id ="brand" src={brandLogo} alt="BrandLogo" />
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
              <Link
                className="navLink"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                style={{
                  color: "#0b8911",
                  fontWeight: 300,
                  fontSize: "20px",
                  float: "right",
                }}
                
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navLink"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                style={{
                  color: "#0b8911",
                  fontWeight: 300,
                  fontSize: "20px",
                  float: "right",
                }}
                
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navLink"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                style={{
                  color: "#0b8911",
                  fontWeight: 300,
                  fontSize: "20px",
                  float: "right",
                }}
                
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
