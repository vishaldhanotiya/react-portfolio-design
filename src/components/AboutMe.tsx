import React from "react";
import "../components/AboutMe.scss";
const AboutMe = () => {
  return (
    <section className="about-section" id="aboutMe">
      <div className="logo">
        <img alt="about-me" src={require("../res/background3.png")} />
      </div>
      <div>
        <h1 className="about-title">
          About <span className="about-me">Me</span>
        </h1>
        <p className="about-text">
          My self <span>Vishal Dhanotiya</span>. I am a Frontend developer. My
          expertise lies in frontend technologies, including
          <span> React Native</span>,<span> React.js</span>, and
          <span> JavaScript</span>. Currently, I'm deeply engaged with
          <span> HTML</span>,<span> CSS</span> and
          <span> TypeScript</span>, pushing the boundaries of what can be
          achieved. I maintain a perpetual commitment to honing my skills and
          keeping pace with the ever-evolving landscape of industry trends.
          <br></br>
          <br></br>
          <br></br>
          I'm also a passionate to share my expertise and insights into the
          world of frontend development. I enjoy sharing my knowledge with
          others and helping fellow developers understand and be creative with
          web and mobile technologies.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
