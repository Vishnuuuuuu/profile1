import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../assets/developer.png"; // Adjust path as needed
import About from "./About"; // Add the About component
import Contact from "./Contact"; // Add the Contact component
import "./home.css"; // Assuming custom styles
import Projects from "./Projects"; // Add the Projects component
import Skills from "./Skills"; // Add the Skills component
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> @ VISHNU PRASAD S </strong>
                {/* <strong className="main-name">  SHASHIDHAR L N</strong> */}
              </h1>

              <div className="type-container">
                <Type />
              </div>

              <div className="intro-text">
                <p>
                  As a full-stack developer, I apply my passion for coding to
                  develop end-to-end solutions using <strong>Node.js</strong>,
                  modern JavaScript libraries and frameworks like{" "}
                  <strong>React.js</strong>, and databases like{" "}
                  <strong>MongoDB</strong>.
                </p>
                <p>
                  I am fluent in languages like{" "}
                  <strong>Java, JavaScript, Python, AI&ML</strong>, and{" "}
                  <strong>No code tools</strong>.
                </p>
                <p>
                  My field of interest includes building new{" "}
                  <strong>Web Technologies and Products</strong>, exploring the
                  realms of <strong>Artificial Intelligence</strong>, and
                  delving into areas related to <strong>AI and Prompt Engg</strong>.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Scrollable Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}

export default Home;
