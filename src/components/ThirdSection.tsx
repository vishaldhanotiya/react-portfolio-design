import React from "react";
import "../components/ThirdSection.scss";
export default function ThirdSection() {
  return (
    <div id="thirdSection" className="main-background">
      <p className="title">
        My <span className="me">Skils</span>
      </p>

      <div className="second-container">
        <p className="web-title">Languages and Libraries</p>

        <div className="first-section">
          <div className="skill-1">
            <img
              alt=""
              src={require("../res/html.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/social.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/js.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/typescript.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/physics.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/redux.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/sass.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/firebase.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/socket.png")}
              className="skill-image"
            />
          </div>
        </div>
        <p className="web-title">Tools</p>

        <div className="first-section">
          <div className="skill-1">
            <img
              alt=""
              src={require("../res/android.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/xcode.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/windows.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/postman.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/Swagger.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/git.png")}
              className="skill-image"
            />
            <img
              alt=""
              src={require("../res/githubs.png")}
              className="skill-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
