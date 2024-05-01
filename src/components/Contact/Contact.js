import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import { Model } from "./Model";
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
            <Canvas shadows camera={{ position: [0, 0, 7] }}>
              <Suspense fallback={null}>
                <spotLight
                  position={[0, 100, 100]}
                  penumbra={1}
                  intensity={1}
                  castShadow
                />
                <spotLight
                  position={[0, -100, 100]}
                  penumbra={1}
                  intensity={0.12}
                  angle={0.9}
                  castShadow
                />
                <Model />
              </Suspense>
            </Canvas>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
