import React from "react";
import "./SeventhSection.scss";
export default function SeventhSection() {
  return (
    <div
      style={{ backgroundColor: "#000000" }}
      id="seventhSection"
      className="seventh-background"
    >
      <p className="seventh-title">LET'S GET IN TOUCH</p>

      <p className="seventh-subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br />
        Lorem Ipsum standard dummy text ever since the 1500s,
        <br /> when an unknown printer took a galley specimen book.
      </p>
      <div className="touch-container">
        <div className="location-margin">
          <div className="pin-image" />

          <p className="address-text">
            Big Street AVE, 254 Los Angeles <br />
            California
          </p>
        </div>
        <div className="location-margin">
          <div className="email-image" />

          <p className="address-text">contact@planus.com</p>
        </div>
        <div className="location-margin">
          <div className="call-image" />

          <p className="address-text">(544)-746-28902</p>
        </div>
      </div>
      <div style={{ display: "block", justifyContent: "center" }}>
        <input placeholder="Name" className="name-input" />
        <br />
        <input placeholder="Email" className="email-input" />
        <br />
        <input className="message-input" />
        <div className="submit-container">
          <div className="submit-button">{"SUBMIT"}</div>
        </div>
      </div>
    </div>
  );
}
