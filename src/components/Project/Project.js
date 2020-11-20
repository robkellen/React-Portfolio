import React, { useState } from "react";
import { Col, Card, Modal } from "react-bootstrap";
import "./Project.css";

function Project(props) {
  //set state for displaying modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={4} className="mb-4">
      <Card
        className="project-card text-center h-100"
        // style={{ width: "21rem" }}
      >
        <img
          src={props.image}
          className="card-img-top"
          alt={props.title}
          onClick={handleShow}
        />
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
          <Modal.Title id="custom-modal">{props.title}</Modal.Title>
        </Modal.Header>
        <div className="modal-body">
          <img
            className="img-center h-100 w-100"
            src={props.image}
            alt={props.name}
          />
          <p>{props.description}</p>
          <div className="modal-footer">
            <a
              id="live-link"
              href={props.liveApp}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>
                Link to {props.appName} {props.app}
              </span>
            </a>
            <a
              id="repo-link"
              rel="noopener noreferrer"
              href={props.gitRepo}
              target="_blank"
            >
              {props.linkTo} {props.name} {props.repo}
            </a>
          </div>
        </div>
      </Modal>
    </Col>
  );
}

export default Project;
