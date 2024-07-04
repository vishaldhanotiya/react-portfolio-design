import React from "react";
import "./Achievement.scss";

const Achievement = () => {
  return (
    <section className="achievement-section" id="achievement">
      <h2 className="achievement-title">Achievement</h2>

      <div className="achievement-div">
        <div className="center-div">
          <img
            alt="award-icon"
            src={require("../res/award-icon.png")}
            className="award-icon"
          />
          <span className="award-name">{"Persistent Top Talent 2023-24"}</span>
        </div>
        <div className="center-div">
          <img
            alt="star"
            src={require("../res/star.png")}
            className="award-icon"
          />
          <span className="award-name">{"Codiant Star Performer 2020"}</span>
        </div>
        <div className="center-div">
          <img
            alt="bravo"
            src={require("../res/bravo.png")}
            className="award-icon"
          />
          <span className="award-name">{"Bravo Individual Award"}</span>
        </div>
        <div className="center-div">
          <img
            alt="diploma"
            src={require("../res/diploma.png")}
            className="award-icon"
          />
          <span className="award-name">{"Udemy Learning Certificate"}</span>
        </div>
        <div className="center-div">
          <img
            alt="creativity"
            src={require("../res/creativity.png")}
            className="award-icon"
          />
          <span className="award-name">{"Open Source Contributor"}</span>
        </div>
        <div className="center-div">
          <img
            alt="repo"
            src={require("../res/repo.png")}
            className="award-icon"
          />
          <span className="award-name">{"2K Reputation Stackoverflow"}</span>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
