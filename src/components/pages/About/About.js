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
        <Col className="col-headers text-center">
          <Fade left>
            <h3 className="aboutH3">SKILLS</h3>
          </Fade>
        </Col>
        <Col md={3} className="col-headers text-center">
          <h3>Placeholder</h3>
        </Col>
        <Col className="col-headers text-center">
          <Fade right>
            <h3 className="aboutH3">PERSONAL</h3>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}

export default About;
