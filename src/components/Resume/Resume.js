import React, { useState } from "react";
import { Col, Card, Modal } from "react-bootstrap";
import "./Resume.css";

export default function Resume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col md={4} className="mb-4">
      <Card className="resume-card text-center h-100">
        <img
          src="https://res.cloudinary.com/robbiek/image/upload/b_rgb:030132,c_pad,h_400,w_300/v1627078273/Resume.png"
          className="card-img-top"
          id="resume-image"
          alt="Resume"
          onClick={handleShow}
          fluid="true"
        />
        <Card.Footer><span id="resume-span" onClick={handleShow}>VIEW MY RESUME</span></Card.Footer>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        area-labelledby="custom-modal"
        scrollable="true"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="custom-modal">Resume</Modal.Title>
        </Modal.Header>
        <div className="modal-body">
          <img
            className="img-center h-100 w-100"
            id="resume-image"
            src="https://res.cloudinary.com/robbiek/image/upload/c_fill/v1627078273/Resume.png"
            alt="Resume"
          />
          <div className="modal-footer">
            <a
              id="live-link"
              href="https://www.linkedin.com/in/robert-kellen/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>View My LinkedIn Profile</span>
            </a>
            <a
              id="resume-link"
              href="https://docs.google.com/document/d/1k-0yEEsKQ4Ar4RK7W2V9WLNT41kfz5yOROG2zQHY7zQ/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>View As Google Doc</span>
            </a>
          </div>
        </div>
      </Modal>
    </Col>
  );
}
