import React from "react";
import Fade from "react-reveal";
import {Link} from "react-scroll"
import { Row, Container, Col, Button } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row id="main">
          <Col>
            <div className="h1">
              <Fade>
                Hello! I'm <span id="colorful"> Rob Kellen</span>.
              </Fade>
            </div>
            <div>
              <Fade left cascade delay={50000}>
                <h3 className="h3">Full-Stack Web Developer</h3>
              </Fade>
            </div>
            <div className="button">
              <Fade delay={4000}>
                <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                >
                  <button className="btn">
                    <span>
                      View My Work <span id="arrow">→</span>
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
