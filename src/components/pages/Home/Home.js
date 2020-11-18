import React from "react";
import { Reveal, Fade } from "react-reveal";
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
              <Reveal left delay={1000}>
                Hello! I'm <span id="colorful"> Rob Kellen</span>.
              </Reveal>
            </div>
            <div className="h3">
              <Reveal left delay={2000} duration={2000}>
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
                  <button className="btn">
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
