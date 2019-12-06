import React, { useState } from "react";
import { isValidEmail } from "../utils/validation";

const Contact = ({ sendSms }) => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmition = e => {
    e.preventDefault();
    const msg = state;
    sendSms(msg);
  };

  const { name, email, phone, message } = state;

  return (
    <form onSubmit={handleFormSubmition} className="form">
      <div className="form-header">
        <h3>Get in touch</h3>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
        />
        <label htmlFor="name" className="label">
          Full Name
        </label>
      </div>

      <div className="form-group">
        <input
          type="email"
          className={
            email && !isValidEmail(email)
              ? "form-control danger"
              : "form-control"
          }
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
        />
        <label
          htmlFor="email"
          className={email && !isValidEmail(email) ? "label danger" : "label"}
        >
          {email && !isValidEmail(email) ? "Invalid Email" : "Email"}
        </label>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleInputChange}
          placeholder="Phone"
          required
        />
        <label htmlFor="phone" className="label">
          Phone
        </label>
      </div>

      <div className="form-group">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          value={message}
          className="form-control"
          placeholder="Message"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="message" className="label">
          Message
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default Contact;
