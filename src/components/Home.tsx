import React from "react";
import "../components/Home.scss";
import Type from "./Type.tsx";

const Home = (props) => {
  // Create reference to store the DOM element containing the animation

  return (
    <div id="firstSection">
      <div className="background">
        <div className="nav-container">
          <div>
            <img
              alt="my-logo"
              width={250}
              height={50}
              src={require("../res/logo.gif")}
            />
          </div>
          <div className="nav-menu">
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/vishaldhanotiya"
                >
                  <img
                    alt="github"
                    src={require("../res/github.png")}
                    className="img"
                  />
                </a>
              </span>
              <span className="circle">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/vishal.dhanotiya.75/"
                >
                  <img
                    alt="facebook"
                    src={require("../res/facebook.png")}
                    className="img"
                  />
                </a>
              </span>
              <span className="circle">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stackoverflow.com/users/9158543/vishal-dhanotiya"
                >
                  <img
                    alt="media"
                    src={require("../res/stackoverflow.png")}
                    className="img"
                  />
                </a>
              </span>
              <span className="circle">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://in.linkedin.com/in/vishal-dhanotiya-a7966599"
                >
                  <img
                    alt="linkedin"
                    src={require("../res/linkedin.png")}
                    className="img"
                  />
                </a>
              </span>
              {/* <span className="circle">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stackoverflow.com/users/9158543/vishal-dhanotiya"
                >
                  <img
                    alt="instagram"
                    src={require("../res/instagram.png")}
                    className="img"
                  />
                </a>
              </span> */}
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

export default Home;