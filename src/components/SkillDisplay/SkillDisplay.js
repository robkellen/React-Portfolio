import React from "react";
import { Col } from "react-bootstrap";
import "./SkillDisplay.css";

function Skill(props) {
  return (
    <Col className="skills">
      <img src={props.image} alt={props.name} className="skill" />
    </Col>
  );
}

export default Skill;
