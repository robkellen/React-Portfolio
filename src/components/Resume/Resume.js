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
          src="https://res.cloudinary.com/robbiek/image/upload/c_thumb,w_200,g_face/v1605724329/Portfolio/Robert_Kellen_Resume_ehlhbi.png"
          className="card-img-top"
          id="resume-image"
          alt="Resume"
          onClick={handleShow}
          fluid="true"
        />
        <Card.Footer>VIEW MY RESUME</Card.Footer>
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
            src="https://res.cloudinary.com/robbiek/image/upload/v1605724329/Portfolio/Robert_Kellen_Resume_ehlhbi.png"
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
          </div>
        </div>
      </Modal>
    </Col>
  );
}
