import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProjectItem(props) {
  const project = props.project;
  const title = project.title;
  const words = project.specificWords;
  const imageSrc = project.imageSrc;
  const description = project.description;

  const highlightWords = (text, words) => {
    let highlightedText = text;
    words.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="blue">${word}</span>`
      );
    });
    return highlightedText;
  };

  const highlightedDescription = highlightWords(description, words);

  return (
    <Card className="quote-card-view">
      <Card.Body className="project-card-view">
        <blockquote className="blockquote mb-0">
          <Row>
            <Col
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              className="project-img"
            >
              <img
                src={require(`../../Assets/${imageSrc}`)}
                alt={title}
                className="img-fluid"
              />
            </Col>
            <Col md={8}>
              <h2 style={{ paddingTop: "10px", textAlign: "justify" }}>
                {title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: highlightedDescription }}
                style={{ paddingTop: "5px", textAlign: "justify" }}
              />
            </Col>
          </Row>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ProjectItem;
