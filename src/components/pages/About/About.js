import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      
        <Row className="justify-content-center">
          <Fade right delay={4000}>
            About!
          </Fade>
        </Row>
      
    </div>
  );
}

export default About;
