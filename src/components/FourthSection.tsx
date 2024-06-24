import React from "react";
import "./FourthSection.scss";

export default function FourthSection() {
  return (
    <div
      style={{ marginTop: -50, backgroundColor: "#000000" }}
      id="fourthSection"
    >
      <p className="fourth-title">Experience</p>

      <div className="section-1">
        <div className="column-1">
          <div className="back-ground">
            <span className="text-1">{"Persistent Systems"}</span>
            <span className="text-2">{"Engineering Lead"}</span>
            <span className="text-2">{"Mar 2022 to Present"}</span>
          </div>
          <br></br>
          <br></br>
          <div className="back-ground">
            <span className="text-1">{"Codiant Software Technologies"}</span>
            <span className="text-2">{"Senior Software Engineer"}</span>
            <span className="text-2">{"Dec 2017 - Feb 2022"}</span>
          </div>
          <br></br>
          <br></br>
          <div className="back-ground">
            <span className="text-1">
              {"Young Decade IT Software Solution"}
            </span>
            <span className="text-2">{"Software Engineer"}</span>
            <span className="text-2">{"May 2016 - Nov 2017"}</span>
          </div>
          <br></br>
          <br></br>
          <div className="back-ground">
            <span className="text-1">
              {"Canopus Infosystems Private Limited "}
            </span>
            <span className="text-2">{"Junior Software Engineer"}</span>
            <span className="text-2">{"Dec 2015 - Feb 2016"}</span>
          </div>
        </div>
        <div className="column-1">
          <div className="logo-1" />
        </div>
      </div>
    </div>
  );
}
