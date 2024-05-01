import React from "react";
import { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

function ContactForm() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, email, and message are not empty
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      let errorMessage = "Please fill in the following fields:";
      if (!form.name.trim()) {
        errorMessage += "\n- Name";
      }
      if (!form.email.trim()) {
        errorMessage += "\n- Email";
      }
      if (!form.message.trim()) {
        errorMessage += "\n- Message";
      }
      alert(errorMessage);
      return;
    }
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.REACT_APP_TO_NAME,
          from_email: form.email,
          to_email: process.env.REACT_APP_TO_EMAIL,
          message: form.message,
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_API_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out. Will get back to you as soon as possible."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label className="label-field">
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="name-form-field"
              ></input>
            </label>

            <label className="label-field">
              <span>Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="email-form-field"
              ></input>
            </label>

            <label className="label-field">
              <span>Your Message</span>
              <textarea
                rows="5"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="message-form-field"
              ></textarea>
            </label>

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
            <Button
              type="submit"
              className="contact-submit-button"
              variant="flat"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactForm;
