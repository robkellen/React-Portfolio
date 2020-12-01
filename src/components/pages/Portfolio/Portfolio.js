import React, { Component } from "react";
import Project from "../../Project/Project";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import projects from "../../../projects.json";
import "./Portfolio.css";

class Portfolio extends Component {
  // setting this.state.projects to the projects json array
  state = {
    projects,
  };

  render() {
    return (
      <div id="portfolio">
        <Container className="container">
          <Row id="portfolio-title" className="justify-content-center d-flex">
            <Fade left big>
              <h1 className="card-title blueH1">PROJECTS</h1>
            </Fade>
          </Row>
          <Fade right delay={1100}>
            <Col id="main-col" className="col-xs">
              <Row id="card-row" className="justify-content-center">
                {this.state.projects.map((project) => (
                  <Project
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    title={project.title}
                    appName={project.appName}
                    image={project.image}
                    description={project.description}
                    gitRepo={project.gitRepo}
                    liveApp={project.liveApp}
                    app={project.app}
                    repo={project.repo}
                  />
                ))}
              </Row>
            </Col>
          </Fade>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
