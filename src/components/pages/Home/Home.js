import React from "react";
import Fade from "react-reveal";
import { Row, Container, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  //set up animation for main part of page

  return (
    <div className="home">
      <Container>
        <Row id="main">
          <Col>
            <Fade  duration={1000}>
              <h1 className="h1">Hello! I'm Rob Kellen.</h1>
            </Fade>

            <Fade left cascade delay={20000} duration={3000}>
              <h3 className="h3">Full-Stack Web Developer</h3>
            </Fade>

          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
