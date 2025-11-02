import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>💌 Get in Touch With Us</h2>
        <p className="subtitle">
          We'd love to hear from you! Whether it’s feedback, suggestions, or partnership ideas —
          drop us a message below 🌻
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="send-btn">Send Message 🌸</button>
        </form>

        {success && <div className="success-msg">✅ Message Sent Successfully!</div>}
      </div>
    </div>
  );
}

export default Contact;
