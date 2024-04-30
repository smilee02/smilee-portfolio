import React from "react";
import { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import emailjs from "@emailjs/browser";

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
    setLoading(true);

    emailjs
      .send(
        "service_gioye65",
        "template_c0tcjey",
        {
          from_name: form.name,
          to_name: "SmiLee",
          from_email: form.email,
          to_email: "skrarnermid@gmail.com",
          message: form.message,
        },
        "gZK-po_Dap9PBmf1o"
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
    <Card className="contact-form">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <form ref={formRef} onSubmit={handleSubmit} className="form-fields">
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
              <input
                rows="7"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="message-form-field"
              ></input>
            </label>
          </form>
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
          <button type="submit" className="cv-button" variant="flat">
            {loading ? "Sending..." : "Send"}
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactForm;
