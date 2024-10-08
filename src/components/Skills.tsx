import React from "react";
import "../components/Skills.scss";
const Skills = () => {
  return (
    <section id="skills" className="main-background">
      <h2 className="skill-title">Skills</h2>
      <h1 className="lang-title">Languages and Libraries</h1>

      <div className="skill-div">
        <img
          alt="img1"
          src={require("../res/html.png")}
          className="skill-image"
        />
        <img
          alt="img2"
          src={require("../res/social.png")}
          className="skill-image"
        />
        <img
          alt="img3"
          src={require("../res/js.png")}
          className="skill-image"
        />
        <img
          alt="img4"
          src={require("../res/typescript.png")}
          className="skill-image"
        />
        <img
          alt="img5"
          src={require("../res/physics.png")}
          className="skill-image"
        />
        <img
          alt="img6"
          src={require("../res/redux.png")}
          className="skill-image"
        />
        <img
          alt="img6"
          src={require("../res/sass.png")}
          className="skill-image"
        />
        <img
          alt="img7"
          src={require("../res/firebase.png")}
          className="skill-image"
        />
        <img
          alt="img8"
          src={require("../res/socket.png")}
          className="skill-image"
        />
      </div>
      <h1 className="lang-title">Tools</h1>

      <div className="skill-div">
        <img
          alt="img9"
          src={require("../res/android.png")}
          className="skill-image"
        />
        <img
          alt="img10"
          src={require("../res/xcode.png")}
          className="skill-image"
        />
        <img
          alt="img11"
          src={require("../res/windows.png")}
          className="skill-image"
        />
        <img
          alt="img12"
          src={require("../res/postman.png")}
          className="skill-image"
        />
        <img
          alt="img14"
          src={require("../res/git.png")}
          className="skill-image"
        />
        <img
          alt="img15"
          src={require("../res/github.png")}
          className="skill-image"
        />
      </div>
    </section>
  );
};
export default Skills;
