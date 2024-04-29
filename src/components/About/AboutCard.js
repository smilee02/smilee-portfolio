import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImBook, ImUsers } from "react-icons/im";
import { IoGameController, IoMusicalNotes } from "react-icons/io5";
import Resume from "../../Assets/Resume.pdf";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="purple">Francisco Cardoso </span>
            from <span className="purple"> Portugal.</span>
            <br />
            I'm currently pursuing a Master's in AI Engineering at Instituto
            Superior de Engenharia do Porto, following my Bachelor's in Computer
            Software Engineering.
            <br />
            Additionally, I am enthusiastic about Medicine.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <IoGameController /> Playing Games
            </li>
            <li className="about-activity">
              <IoMusicalNotes /> Playing Piano
            </li>
            <li className="about-activity">
              <ImBook /> Reading
            </li>
            <li className="about-activity">
              <ImUsers /> Hanging out with friends
            </li>
          </ul>

          <a
            href={Resume}
            className="cv-a-tag"
            download="CV_Francisco_Cardoso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <style type="text/css">
              {`
              .btn-flat {
                background-color: transparent;
                color: white;
              }
              .btn-flat:hover{
                color: white;
              }
              `}
            </style>
            ;
            <Button className="cv-button" variant="flat">
              Download CV
            </Button>
          </a>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
