import React from "react";
import {Col, Card} from "react-bootstrap";
import "./Project.css"



function Project(props) {
  
  return (
    <Col className="col mb-4">
    <Card style={{width: "20rem"}}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className="card-text">
          {props.description}
        </p> */}
        <a rel="noopener noreferrer" href={props.gitRepo} target="_blank">Link to {props.name} GitHub Repository</a><br></br><a rel="noopener noreferrer" href={props.liveApp} target="_blank">Try out the live version</a>
      </div>
    </Card>
  </Col>
  )
  
}

export default Project;