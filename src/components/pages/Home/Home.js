import React from "react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade"
import { Link } from "react-scroll";
import { Row, Container, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row id="main">
          <Col>
            <div className="h1">
              <Reveal left>
                Hello! I'm <span id="colorful"> Rob Kellen</span>.
              </Reveal>
            </div>
            <div className="h3">
              <Reveal right delay={1200}>
                 Full-Stack Web Developer
              </Reveal>
            </div>
            <div className="button">
              <Fade delay={2000} duration={1500}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={700}
                >
                  <button id="btn" className="btn">
                    <span>
                      Get To Know Me <span id="arrow">→</span>
                    </span>
                  </button>
                </Link>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
