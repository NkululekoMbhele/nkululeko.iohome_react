import React from "react";
import Title from "./Title";
import ContactForm from "./Form";
import "./Contact.css";

function Contact() {
  const title = "Contact";
  const titleColor = "whiteColor";
  return (
    <div className="contact-section">
      <Title titleColor={titleColor} title={title} />
      <ContactForm />
    </div>
  );
}

export default Contact;
