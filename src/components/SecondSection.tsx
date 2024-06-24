import React from "react";
import "../components/SecondSection.scss";
export default function SecondSection() {
  return (
    <div style={{ backgroundColor: "#000000" }} id="secondSection">
      <div className="section">
        <div className="column">
          <div className="logo" />
        </div>
        <div className="column">
          <p className="title">
            About <span className="me">Me</span>
          </p>
          <p className="text">
            My name is Vishal Dhanotiya. I am a Frontend Mobile and Website
            developer. In the early day of the my career I start working as a
            android developer but after 2 year I got a opportunity to work on
            React Native. Now I am enjoying to develop cross-platform
            applications.
            <br></br>
            <br></br>
            <br></br>
            I'm also a passionate writer, with a blog and articles on various
            platforms, where I share my expertise and insights into the world of
            frontend development. I enjoy sharing my knowledge with others and
            helping fellow developers understand and be creative with web
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
