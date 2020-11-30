import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import SkillDisplay from "../../SkillDisplay/SkillDisplay";
import "./About.css";
import skills from "../../../skills.json";


class About extends Component {
  state = {
    skills,
  };
  render() {
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
            <Row className="justify-content-center">
              {this.state.skills.map((skill) => (
                <SkillDisplay
                  id={skill.id}
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                />
              ))}
            </Row>
          </Col>
          <Col md={4} className="col-headers text-center">
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
}

export default About;
