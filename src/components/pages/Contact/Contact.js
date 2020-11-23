import React from "react";
import Fade from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Container className="container">
        <Row id="title-row" className="justify-content-center">
          <Fade left>
            <h1 id="contact-title">Contact</h1>
          </Fade>
        </Row>
        <Fade right>
          <Row className="row justify-content-md-center">
            {/* <Col className="card col-md-4">
            <div className="card-header">
              <h2>Rob Kellen</h2>
            </div>
            <ul className="list-group ">
              <li className="list-group-item border-0">
                <i id="email" className="fa fa-envelope"></i>{" "}
                rob.h.kellen@gmail.com
              </li>
              <br />
              <li id="mobile" className="list-group-item border-0">
                <i className="fa fa-mobile"></i> (847) 344-9971
              </li>
              <br />
              <li className="list-group-item border-0">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/robkellen"
                  target="_blank"
                >
                  <i id="github" className="fa fa-github"></i>{" "}
                  Github.com/robkellen
                </a>
              </li>
              <br />
              <li className="list-group-item border-0">
                <a
                  rel="noopener noreferrer"
                  href="http://linkedin.com/in/robert-kellen-90a3951aa"
                  target="_blank"
                >
                  <i
                    rel="noopener noreferrer"
                    id="github"
                    className="fa fa-linkedin-square"
                  ></i>{" "}
                  Linkedin.com/in/robert-kellen
                </a>
              </li>
              <br />
            </ul>
          </Col> */}
            <Col className="card col-md-8">
              <div className="card-header">
                <h2>Wish to connect or work together?</h2>
              </div>
              <ContactForm />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default Contact;
