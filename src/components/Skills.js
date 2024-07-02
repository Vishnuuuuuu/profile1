import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiFirebase, SiMysql, SiPostman, SiVercel, SiVisualstudiocode } from "react-icons/si";
import "./skills.css";

function Techstack() {
  return (
    <>
      <div className="skills-section">
        <h2 className="skills-heading">Professional Skillset</h2>
        <Row className="skillset">
          <Col xs={3} md={2} className="tech-icon">
            <DiNodejs />
            <span>Node.js</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiJavascript1 />
            <span>JavaScript</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiReact />
            <span>React</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiMongodb />
            <span>MongoDB</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiFirebase />
            <span>Firebase</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiPython />
            <span>Python</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiJava />
            <span>Java</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiMysql />
            
          </Col>
        </Row>
      </div>

      <div className="tools-section">
        <h2 className="tools-heading">Tools I Use</h2>
        <Row className="tools">
          <Col xs={3} md={2} className="tech-icon">
            <SiVercel />
            <span>Vercel</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon vs-code">
            <SiVisualstudiocode />
            <span>VSCode</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiPostman />
            <span>Postman</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiGit />
            <span>Git</span>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Techstack;
