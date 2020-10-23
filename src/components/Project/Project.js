import React from "react";
import {Col, Card} from "react-bootstrap";



function Project() {
  
  return (
    <Col className="col mb-4">
    <Card className="card h-100">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">GameTracker</h5>
        <p className="card-text">
          This application allows users to maintain a database of their personal games across all platforms.  This is a full-stack web application designed using the MVC paradigm with server-side API. 
        </p>
        <a rel="noopener noreferrer" href="https://github.com/robkellen/GameTracker" target="_blank">Link to GameTracker GitHub Repository</a><br></br><a rel="noopener noreferrer" href="https://glacial-taiga-04215.herokuapp.com/" target="_blank">Try out the live version</a>
      </div>
    </Card>
  </Col>
  )
  
}

export default Project;