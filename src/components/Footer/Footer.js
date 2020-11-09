import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      id="sticky-footer"
      className="py-4 sticky-bottom
    text-white-50"
    >
      <div className="container text-center">
        {/* Link to LinkedIn */}
        <ul className="list-group list-group-horizontal">
          <a
            href="http://linkedin.com/in/robert-kellen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="linked-in" className="fa fa-linkedin-square"></i>
          </a>
          {/* Link to my GitHub page */}
          <a
            href="https://github.com/robkellen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="github" className="fa fa-github"></i>
          </a>
          {/* Link to my email */}
          <a
            href="mailto:rob.h.kellen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="email" className="fa fa-envelope-o"></i>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
