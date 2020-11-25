import React from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <Row id="about-main" className="justify-content-center">
        <Fade right delay={4000}>
          <h1>ABOUT</h1>
        </Fade>
      </Row>
      <Row className="justify-content-center">
        <Col md={5} className="col-headers text-center">
          <Fade left>
            <h3>SKILLS</h3>
          </Fade>
        </Col>
        <Col md={2} className="col-headers text-center">
          <h3>Placeholder</h3>
        </Col>
        <Col md={5} className="col-headers text-center">
          <Fade right>
            <h3>PERSONAL</h3>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}

export default About;
