import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <medium className="connect">Connect with me:</medium>
        {/* Link to LinkedIn */}
        <ul class="list-group list-group-horizontal">
          <a
            href="http://linkedin.com/in/robert-kellen-90a3951aa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="linked-in" class="fa fa-linkedin-square"></i>
          </a>
          {/* Link to my GitHub page */}
          <a
            href="https://github.com/robkellen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="github" class="fa fa-github"></i>
          </a>
          {/* Link to my email */}
          <a
            href="mailto:rob.h.kellen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="email" class="fa fa-envelope-o"></i>
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
