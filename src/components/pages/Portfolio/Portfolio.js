import React from "react";
import Project from "../../Project/Project";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

function Portfolio() {
  return (
    <div>
    <Navbar />
    <Container>
      <Row id="main-row" className="row justify-content-center">
        <Col id="main-col" className="col-sm">
          <div className="main-header">
            <h1 className="card-title ">My Work:</h1>
            <h5 className="card-text">Always in progress...</h5>
          </div>
          <Project />
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  );
}

export default Portfolio;
