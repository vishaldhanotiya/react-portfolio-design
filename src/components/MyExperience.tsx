import React from "react";
import "./MyExperience.scss";

export default function MyExperience() {
  return (
    <div style={{ backgroundColor: "#000000" }} id="fourthSection">
      <div className="fourth-section">
        <p className="experience-title">Experience</p>

        <div className="experience-div">
          <div className="experience-box">
            <div className="back-ground">
              <span className="company-text">{"Persistent Systems"}</span>
              <span className="company-sub-text">{"Engineering Lead"}</span>
              <span className="company-sub-text">{"Mar 2022 to Present"}</span>
            </div>
            <br></br>
            <br></br>
            <div className="back-ground">
              <span className="company-text">
                {"Codiant Software Technologies"}
              </span>
              <span className="company-sub-text">
                {"Senior Software Engineer"}
              </span>
              <span className="company-sub-text">{"Dec 2017 - Feb 2022"}</span>
            </div>
            <br></br>
            <br></br>
            <div className="back-ground">
              <span className="company-text">
                {"Young Decade IT Software Solution"}
              </span>
              <span className="company-sub-text">{"Software Engineer"}</span>
              <span className="company-sub-text">{"May 2016 - Nov 2017"}</span>
            </div>
            <br></br>
            <br></br>
            <div className="back-ground">
              <span className="company-text">
                {"Canopus Infosystems Private Limited "}
              </span>
              <span className="company-sub-text">
                {"Junior Software Engineer"}
              </span>
              <span className="company-sub-text">{"Dec 2015 - Feb 2016"}</span>
            </div>
          </div>
          <div className="experience-box">
            <img
              alt="office"
              src={require("../res/office.png")}
              className="office-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
