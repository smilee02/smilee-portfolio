import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectItem from "./ProjectItem";

import projects from "../../Assets/projects.json";

function Projects() {
  return (
    <Container fluid className="projects-section">
      <Particle />
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        University <strong className="blue">Projects</strong>
      </h1>
      <Container>
        <Row>
          {projects.map((item, index) => (
            <ProjectItem key={index} project={item} />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
