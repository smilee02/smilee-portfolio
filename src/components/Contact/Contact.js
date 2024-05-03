import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import contactImg from "../../Assets/contact.png";
function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="blue">Me</strong>
            </h1>
            <ContactForm />
          </Col>
          <Col md={5}>
            <img
              src={contactImg}
              className="img-fluid contact-image"
              alt="contact"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
