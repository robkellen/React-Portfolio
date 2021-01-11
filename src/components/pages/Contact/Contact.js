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
                <h3>Wish to connect or work together?  
                  Send me a message...</h3>
              </div>
              <ContactForm />
              <h3 className="card-header">...or email me at: <a
            href="mailto:rob.h.kellen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >rob.h.kellen@gmail.com</a></h3>
            </Col>
          </Row>
          {/* <Row className="row justify-content-md-center align-items-center">
            <Col id="email-address" >
            
            </Col>
          </Row> */}
        </Fade>
      </Container>
    </div>
  );
}

export default Contact;
