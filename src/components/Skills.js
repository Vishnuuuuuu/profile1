import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGithubBadge,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact
} from "react-icons/di";
import {
  SiApollographql // Used for API Development
  , // Added FlutterFlow
  SiCanva,
  SiCodesandbox,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGlitch,
  SiLinux,
  SiMysql,
  SiOpenai,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiWordpress
} from "react-icons/si"; // SiOpenai is used for ChatGPT

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
            <SiMysql />
            <span>MySQL</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiExpress />
            <span>Express.js</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiApollographql />
            <span>API Development</span> {/* API Development with Apollo GraphQL */}
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiWordpress />
            <span>WordPress</span>
          </Col>
        </Row>
      </div>

      <div className="tools-section">
        <h2 className="tools-heading">Tools I Use</h2>
        <Row className="tools">
          <Col xs={3} md={2} className="tech-icon">
            <SiOpenai />
            <span>ChatGPT</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiLinux />
            <span>Linux</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiPostman />
            <span>Postman</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiCanva />
            <span>Canva</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <DiGithubBadge />
            <span>GitHub</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiVercel />
            <span>Vercel</span>
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiFlutter />
            <span>FlutterFlow</span>  {/* New Tool: FlutterFlow */}
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiCodesandbox />
            <span>CodeSandbox</span> {/* New Tool: CodeSandbox */}
          </Col>
          <Col xs={3} md={2} className="tech-icon">
            <SiGlitch />
            <span>Glitch</span> {/* New Tool: Glitch */}
          </Col>
          <Col xs={3} md={2} className="tech-icon vs-code">
            <SiVisualstudiocode />
            <span>VSCode</span>
          </Col>
          
          
        </Row>
      </div>
    </>
  );
}

export default Techstack;
