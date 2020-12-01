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
      <div id="about" className="about container-fluid">
        <Row id="about-main" className="justify-content-center">
          <Fade right delay={4000}>
            <h1>ABOUT</h1>
          </Fade>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="col-headers text-center">
            <Fade left>
              <img
                src="https://res.cloudinary.com/robbiek/image/upload/v1606242001/Portfolio/image0_1_yzaxzc.jpg"
                alt="me"
              />
            </Fade>
          </Col>
          <Col className="col-headers">
            <Fade right>
              <p>
                Full-stack web developer with a strong background of working and
                leading teams in the hospitality industry. Earned a certificate
                in full-stack development from the University of Arizona in
                October, 2020 where I developed knowledge and skills in areas
                including JavaScript, JQuery, CSS, Mongoose, Express, React,
                Node, and CSS to create responsive web applications. With
                passion and perseverance I worked within several teams to create
                various applications through agile development. Most recently I
                worked as part of a four-person team to create a MERN
                application that allows dog trainers to provide their clients
                with tangible and presentable data on the progress of their
                dog’s training, and provide information for opportunities of
                continued progress. My passion to combine seamless integration
                between a creative front-end user experience and an efficient
                and secure back-end is supported by my unwavering work ethic. I
                am excited to join a like-minded team to apply and build upon my
                existing knowledge, and help build creative and serviceable
                applications.
              </p>
            </Fade>
          </Col>
        </Row>
        <Row id="skill-row" className="justify-content-center">
          <Fade up delay={6000}>
            {this.state.skills.map((skill) => (
              <SkillDisplay
                id={skill.id}
                key={skill.id}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </Fade>
        </Row>
      </div>
    );
  }
}

export default About;
