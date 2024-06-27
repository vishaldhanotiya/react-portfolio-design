import React from "react";
import "./ContactUs.scss";
export default function ContactUs() {
  return (
    <div
      style={{ backgroundColor: "#000000" }}
      id="seventhSection"
      className="seventh-background"
    >
      <p className="seventh-title">Let's Get In Touch</p>

      {/* <p className="seventh-subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br />
        Lorem Ipsum standard dummy text ever since the 1500s,
        <br /> when an unknown printer took a galley specimen book.
      </p> */}
      <div className="touch-container">
        <div className="location-margin">
          <img
            alt="location"
            src={require("../res/pin.png")}
            className="pin-image"
          />

          <p className="address-text">India</p>
        </div>
        <div className="location-margin">
          <img
            src={require("../res/email.png")}
            alt="pin"
            className="pin-image"
          />

          <p className="address-text">vishal.dhanotiya2@gmail.com</p>
        </div>
        <div className="location-margin">
          <img
            src={require("../res/call.png")}
            alt="email"
            className="pin-image"
          />

          <p className="address-text">9179237008</p>
        </div>
      </div>
      <div style={{ display: "block", justifyContent: "center" }}>
        <input placeholder="Name" className="name-input" />
        <br />
        <input placeholder="Email" className="email-input" />
        <br />
        <input className="message-input" />
        <div className="submit-container">
          <div className="submit-button">{"Submit"}</div>
        </div>
      </div>
    </div>
  );
}
