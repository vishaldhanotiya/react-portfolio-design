import React from "react";
import "../components/FirstSection.scss";
import Type from "./Type.tsx";

const FirstSection = (props) => {
  // Create reference to store the DOM element containing the animation

  return (
    <div id="firstSection">
      <div className="background-image">
        <div className="header-container">
          <div className="menu-container">
            <div className="home">
              <p className="menu-text">
                <a href="#firstSection">Home</a>
              </p>
            </div>
            <div className="about-me">
              <p className="menu-text">
                <a href="#secondSection">About me</a>
              </p>
            </div>
            <div className="about-me">
              <p className="menu-text">
                <a href="#thirdSection">My Skills</a>
              </p>
            </div>
            <div className="about-me">
              <p className="menu-text">
                <a href="#fourthSection">My Portfolio</a>
              </p>
            </div>
            <div className="about-me">
              <p className="menu-text">
                <a href="#fifthSection">Experience</a>
              </p>
            </div>
            <div className="about-me">
              <p className="menu-text">
                <a href="#sixthSection">Blog</a>
              </p>
            </div>
            <div className="about-me">
              <p className="menu-text">
                <a href="#seventhSection">Contact</a>
              </p>
            </div>
          </div>
        </div>
        <div className="center-containers">
          <div className="center-container">
            <span className="name-text">
              Hi There! <span className="wave-emoji">👋🏻</span>
            </span>
            <span className="name-text">
              I'm <span className="name-text2">Vishal Dhanotiya</span>
            </span>

            <p className="name-text1">
              <Type />
            </p>
            <div className="contact">
              <span className="contact-container">
                <p className="github"></p>
              </span>
              <span className="contact-container">
                <p className="facebook-logo"></p>
              </span>
              <span className="contact-container">
                <p className="media"></p>
              </span>
              <span className="contact-container">
                <p className="linkedin"></p>
              </span>
              <span className="contact-container">
                <p className="instagram"></p>
              </span>
            </div>
          </div>
          <div>
            <img
              className="center-logo"
              src={require("../res/background3.png")}
            />
            {/* <div className="center-logo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
