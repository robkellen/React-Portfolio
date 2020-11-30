import React from 'react';
import { Col, Card } from "react-bootstrap";
import "./SkillDisplay.css";

function SkillDisplay(props) {
  return (
    <Col>
      <Card>
        <img 
        src={props.image}
        alt={props.name}
        className="card-img-top"
        />
      </Card>
    </Col>
  )
}

export default SkillDisplay;  