import React, { Component } from "react";
import Project from "../../Project/Project";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../../projects.json";

class Portfolio extends Component {
  // setting this.state.projects to the projects json array
  state = {
    projects,
  };

  render() {
    return (
      <div id="portfolio" style={{ minHeight: "100vh" }}>
        <Container>
          <Row id="main-row" className="row justify-content-center">
            <Col id="main-col" className="col-sm">
              <div className="main-header">
                <h1 className="card-title ">My Work:</h1>
                <h5 className="card-text">Always in progress...</h5>
              </div>
              <Row>
                {this.state.projects.map((project) => (
                  <Project
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    // description={project.description}
                    // gitRepo={project.gitRepo}
                    // liveApp={project.liveApp}
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
