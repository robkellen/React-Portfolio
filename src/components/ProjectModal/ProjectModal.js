import React, { useState } from "react";
import projects from "../../../package.json";
import { Modal } from "react-bootstrap";

function ProjectModal(props) {
  //set state for displaying modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Modal dialogClassName="modal-80w" area-labelledby="customModal" show={show} onHide={handleClose}>
        <Modal.Header closebutton>
          <Modal.Title id="customModal">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img src={props.image} alt={props.name} /> */}
        </Modal.Body>
    </Modal>
  )
}

export default ProjectModal;
