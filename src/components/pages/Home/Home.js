import React from "react";
import { useSpring, animated } from "react-spring";
import { Row, Container, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  //set up animation for main part of page
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <animated.h1 className="h1" style={props}>
              Home!
            </animated.h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
