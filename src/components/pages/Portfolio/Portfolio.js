import React, { Component } from "react";
import Project from "../../Project/Project";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../../projects.json";
import "./Portfolio.css"

class Portfolio extends Component {
  // setting this.state.projects to the projects json array
  state = {
    projects,
  };

  render() {
    return (
      <div id="portfolio" style={{ minHeight: "100vh" }}>
        <Container className="container">
          <Row id="main-row" className="row d-flex">
            <Col id="main-col" className="col-xs">
              <div className="main-header">
                <h1 className="card-title ">My Work:</h1>
              </div>
              <Row id="card-row" className="justify-content-center">
                {this.state.projects.map((project) => (
                  <Project
                    id={project.id}
                    key={project.id}
                    name={project.name}
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
