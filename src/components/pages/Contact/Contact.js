import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Container className="container">
        <Row id="title-row" className="justify-content-center">
          <Fade left>
            <h1 id="contact-title">CONTACT</h1>
          </Fade>
        </Row>
        <Fade right>
          <Row className="row justify-content-md-center align-items-center">
            <Col id="contact-card" className="card col-md-8">
              <div className="card-header">
                <h3>Wish to connect or work together?</h3>
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
