import React from "react";
import "../components/AboutMe.scss";
export default function SecondSection() {
  return (
    <div style={{ backgroundColor: "#000000" }} id="secondSection">
      <div className="about-section">
        <div className="column">
          <img
            alt="about-me"
            src={require("../res/background3.png")}
            className="logo"
          />
        </div>
        <div className="text-contain">
          <p className="about-text">
            <p className="about-title">
              About <span className="about-me">Me</span>
            </p>
            My self <span className="span-text">Vishal Dhanotiya</span>. I am a
            Frontend developer. My expertise lies in frontend technologies,
            including <span className="span-text"> React Native</span>,
            <span className="span-text"> React.js</span>, and
            <span className="span-text"> JavaScript</span>. Currently, I'm
            deeply engaged with
            <span className="span-text"> HTML</span>,
            <span className="span-text"> CSS</span> and
            <span className="span-text"> TypeScript</span>, pushing the
            boundaries of what can be achieved. I maintain a perpetual
            <br></br>
            <br></br>
            <br></br>
            I'm also a passionate to share my expertise and insights into the
            world of frontend development. I enjoy sharing my knowledge with
            others and helping fellow developers understand and be creative with
            web and mobile technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
