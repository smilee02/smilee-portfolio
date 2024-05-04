import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import tagClasses from "./styleTags.json";

function ProjectItem(props) {
  const project = props.project;
  const title = project.title;
  const words = project.specificWords;
  const imageSrc = project.imageSrc;
  const description = project.description;
  const tags = project.tags;

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
              }}
            >
              <div>
                <img
                  src={require(`../../Assets/${imageSrc}`)}
                  alt={title}
                  className="img-fluid project-image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Col>

            <Col md={8} className="project-text-container">
              <h2 style={{ paddingTop: "10px", textAlign: "justify" }}>
                {title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: highlightedDescription }}
                style={{ paddingTop: "5px", textAlign: "justify" }}
              />
              <div className="tag-container">
                {tags.map((tag, index) => (
                  <span className={`tag-item ${tagClasses[tag]}`} key={tag}>
                    {tag}
                    {index !== tags.length - 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ProjectItem;
