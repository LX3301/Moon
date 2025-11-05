import React, { useState } from "react";
import axios from "axios";
import "./clientForm.css";
import phone from "./img/phone.png";
import email from "./img/email.png";
import telegram from "./img/telegram.png";

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message_res: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/response/user", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        alert("There was an error sending your message.");
      });
  };

  return (
    <div className="container">
      <h4>Interested in our service?</h4>
      <p className="p-head">Fill out the form, or contact us at: </p>
      <div className="contact-info">
        <div className="contact-item">
          <img src={phone} alt="Phone Icon" className="contact-icon" />
          <div>
            <p className="contact-text">+380 92 776 91 33</p>
            <p className="contact-label">Phone</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={email} alt="Email Icon" className="contact-icon" />
          <div>
            <p className="contact-text">info@bluemoon.net</p>
            <p className="contact-label">E-mail</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={telegram} alt="Telegram Icon" className="contact-icon" />
          <div>
            <p className="contact-text">@moon_software</p>
            <p className="contact-label">Telegram</p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <span className="top-rectangle"></span>
        <h2>Let’s work together</h2>
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-left">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
              />
            </div>
            <div className="form-group">
              <label>Your Phone Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="form-right">
            <div className="form-group-message">
              <label>
                A few words
                <br />
                about you or your project
              </label>
              <textarea
                name="message_res"
                value={formData.message_res}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
