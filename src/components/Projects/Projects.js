import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectItem from "./ProjectItem";

import university_projects from "../../Assets/university_projects.json";
import personal_projects from "../../Assets/personal_projects.json";

function Projects() {
  return (
    <Container fluid className="projects-section">
      <Particle />
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        University <strong className="blue">Projects</strong>
      </h1>
      <Container>
        {university_projects.map((item, index) => (
          <ProjectItem key={index} project={item} />
        ))}
      </Container>

      <h1
        style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "50px" }}
      >
        Personal <strong className="blue">Projects</strong>
      </h1>
      <Container>
        {personal_projects.map((item, index) => (
          <ProjectItem key={index} project={item} />
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
