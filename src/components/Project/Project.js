import React, { useState } from "react";
import { Col, Card, Modal } from "react-bootstrap";
import "./Project.css";

function Project(props) {
  //set state for displaying modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col className="col-sm mb-4">
      <Card
        className="project-card text-center h-100"
        style={{ width: "21rem" }}
      >
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
          onClick={handleShow}
        />
        {/* <div className="card-body">
          <h5 className="card-title">{props.name}</h5> */}
        {/* <p className="card-text">
          {props.description}
        </p> */}

        {/* </div> */}
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
          <Modal.Title id="custom-modal">{props.name}</Modal.Title>
        </Modal.Header>
        <div className="modal-body">
          <img
            className="img-center h-100 w-100"
            src={props.image}
            alt={props.name}
          />
          <p>
            {" "}
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <div className="modal-footer">
            <a href={props.liveApp} rel="noopener noreferrer" target="_blank">
              Try out the live version
            </a>

            <a rel="noopener noreferrer" href={props.gitRepo} target="_blank">
              Link to {props.name} GitHub Repository
            </a>
          </div>
        </div>
      </Modal>
    </Col>
  );
}

export default Project;
