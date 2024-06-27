import React, { useState } from "react";
import "./Achievements.scss";
const gridImage = [
  {
    id: 1,
    text: "Top Talent 2024",
    value: require("../res/certificate/top2024.png"),
  },
  {
    id: 2,
    text: "Top Talent 2023",
    value: require("../res/certificate/top2023.png"),
  },
  {
    id: 3,
    text: "Bravo - Individual Awards",
    value: require("../res/certificate/bravo.png"),
  },

  {
    id: 4,
    text: "GenAI Foundation - GenAI Assisted Coding using Amazon CdeWhisperer on FY 2023",
    value: require("../res/certificate/genai.png"),
  },
  {
    id: 5,
    text: "Interviewers Certification Workshop",
    value: require("../res/certificate/interview.png"),
  },
  {
    id: 6,
    text: "React Native - The Practical Guide",
    value: require("../res/certificate/rn2024.png"),
  },

  {
    id: 7,
    text: "Master CI/CD for React Native",
    value: require("../res/certificate/ci-cd.png"),
  },
  {
    id: 8,
    text: "Fastlane for React Native: Deploy your app autonomously!",
    value: require("../res/certificate/fastlane.png"),
  },
  {
    id: 9,
    text: "The Git & Github Bootcamp",
    value: require("../res/certificate/github-bootcamp.png"),
  },
  {
    id: 10,
    text: "The Complete React Native + Hooks Course",
    value: require("../res/certificate/hook.png"),
  },
  {
    id: 11,
    text: "Android Studio Masterclass Conquer the Android IDE",
    value: require("../res/certificate/android-certificate.png"),
  },
  {
    id: 12,
    text: "Android Unit Testing and Test Driven Development",
    value: require("../res/certificate/unit-testing.png"),
  },
];

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="fifthSection"
      style={{ marginBlock: -50, backgroundColor: "#000000" }}
    >
      <p className="fifth-title">Achievements</p>

      <div className="review-container">
        <div
          onClick={() => {
            if (activeIndex) {
              setActiveIndex(activeIndex - 1);
            }
          }}
          className="left-arrow"
        />
        <div className="image-container">
          <img
            alt="review"
            className="reviewer-image-item"
            src={gridImage[activeIndex].value}
          />
        </div>

        <div
          onClick={() => {
            if (activeIndex < gridImage.length - 1) {
              setActiveIndex(activeIndex + 1);
            }
          }}
          className="right-arrow"
        />
      </div>
      <div className="review-text-container">
        <p className="reviewer-name">{gridImage[activeIndex].text}</p>
      </div>
      <div className="pagination-container">
        {gridImage.map((item, index) => {
          return (
            <div className="pagination">
              <div
                style={{
                  height: 10,
                  width: 10,
                  marginBottom: 80,
                  marginTop: 45,
                  marginInline: 2,
                  borderRadius: 5,
                  backgroundColor: index === activeIndex ? "pink" : "gray",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}