import React from "react";
import "../components/Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div>
        <h1 className="contact-title">Contact Me!</h1>
        <div className="detail">
          <img
            alt="email-icon"
            src={require("../res/email-marketing.png")}
            className="email-icon"
          />
          <div className="text-div">
            <span className="detail-title">Mail</span>
            <br></br>
            <span className="detail-value">vishal.dhanotiya2@gmail.com</span>
          </div>
        </div>

        <div className="detail">
          <img
            alt="location-icon"
            src={require("../res/geography.png")}
            className="location-icon"
          />
          <div className="text-div">
            <span className="detail-title">Location</span>
            <br></br>
            <span className="detail-value">Indore, India</span>
          </div>
        </div>
      </div>

      <div>
        <input placeholder="Name" className="name-input" />
        <br />
        <input placeholder="Email" className="email-input" />
        <br />
        <input className="message-input" />
        <div className="submit-container">
          <div className="submit-button">{"Submit"}</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
