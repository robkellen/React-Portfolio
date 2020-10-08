import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
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
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
