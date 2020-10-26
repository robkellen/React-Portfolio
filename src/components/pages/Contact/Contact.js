import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ContactForm from "../../ContactForm/ContactForm";


function Contact() {

  

  return (
    <div>
      <Navbar />
      <Container className="container">
        <Row className="row">
          <Col className="card col-md-4">
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
          </Col>
          <Col className="card">
            <div className="card-header">
              <h2>Contact</h2>
            </div>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
