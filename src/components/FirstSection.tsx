import React from "react";
import "../components/FirstSection.scss";
import Type from "./Type.tsx";

const FirstSection = (props) => {
  // Create reference to store the DOM element containing the animation

  return (
    <div id="firstSection">
      <div className="background">
        <div className="nav-container">
          <p className="nav-text">
            <a href="#firstSection">Home</a>
          </p>
          <p className="nav-text">
            <a href="#secondSection">About me</a>
          </p>
          <p className="nav-text">
            <a href="#thirdSection">My Skills</a>
          </p>
          <p className="nav-text">
            <a href="#fourthSection">Experience</a>
          </p>
          <p className="nav-text">
            <a href="#fifthSection">Achievement</a>
          </p>
          <p className="nav-text">
            <a href="#sixthSection">Blog</a>
          </p>
          <p className="nav-text">
            <a href="#seventhSection">Contact</a>
          </p>
        </div>
        <div className="home-container">
          <div className="name-container">
            <span className="hi-text">
              Hello There! <span className="wave-emoji">👋🏻</span>
            </span>
            <span className="hi-text">
              I'm <span className="name-text">Vishal Dhanotiya</span>
            </span>

            <p className="sub-text">
              <Type />
            </p>
            <div className="social-section">
              <span className="circle">
                <img
                  alt="github"
                  src={require("../res/github.png")}
                  className="img"
                />
              </span>
              <span className="circle">
                <img
                  alt="facebook"
                  src={require("../res/facebook.png")}
                  className="img"
                />
              </span>
              <span className="circle">
                <img
                  alt="media"
                  src={require("../res/stackoverflow.png")}
                  className="img"
                />
              </span>
              <span className="circle">
                <img
                  alt="linkedin"
                  src={require("../res/linkedin.png")}
                  className="img"
                />
              </span>
              <span className="circle">
                <img
                  alt="instagram"
                  src={require("../res/instagram.png")}
                  className="img"
                />
              </span>
            </div>
          </div>
          <div>
            <img
              alt="my-logo"
              className="my-photo"
              src={require("../res/myy.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
