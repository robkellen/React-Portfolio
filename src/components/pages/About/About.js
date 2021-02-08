import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
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
          <Fade right big>
            <h1 className="blueH1">ABOUT</h1>
          </Fade>
        </Row>

        <Row id="info-section" className="justify-content-center">
          <Col sm className="col-headers text-center">
            <Fade left delay={1100}>
              <img
                src="https://res.cloudinary.com/robbiek/image/upload/v1606242001/Portfolio/image0_1_yzaxzc.jpg"
                alt="Headshot"
                id="headshot"
              />
            </Fade>
            <Fade right delay={1100}>
              <p className="bio">
                Full-stack web developer with a strong background of working and
                leading teams in the hospitality industry. I earned a
                certificate in full-stack development from the University of
                Arizona in October, 2020 where I developed knowledge and skills
                in areas including HTML, CSS, JavaScript, JQuery, React,
                MongoDB, Node, Express and multiple front-end frameworks to
                create responsive web applications. With passion and
                perseverance I worked within several teams to create various
                applications through agile development. Most recently I worked
                as part of a four-person team to create a MERN application that
                allows dog trainers to provide their clients with tangible and
                presentable data on the progress of their dog’s training, and
                provide information for opportunities of continued progress. My
                passion to combine seamless integration between a creative
                front-end user experience and an efficient and secure back-end
                is supported by my unwavering work ethic. I am excited to join a
                like-minded team to apply and build upon my existing skillset
                while helping build creative and serviceable applications.
              </p>
              <br />
              <p className="bio">
                I reside in Cave Creek, Arizona along with my incredible wife
                and our two amazing daughters. When I'm not coding I like to
                promote a balanced lifestyle. I am an avid golfer, hibernating
                skier, world traveler, and a fiercely loyal follower of the
                Blackhawks, Cubs, Bears, Bulls, and Liverpool FC.{" "}
              </p>
            </Fade>
          </Col>
        </Row>
        <Row id="skill-row" className="justify-content-center">
          <Fade up delay={2000}>
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
