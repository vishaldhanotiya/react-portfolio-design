import React, { useEffect, useState } from "react";
import "./FifthSection.scss";
const gridImage = [
  {
    id: 1,
    text: "Top Talent 2024",
    review: `This shirt is so soft and comfortable.
         I was a bit worried about the size running small,  but I normally wear a medium and it fits great.`,
    value: require("../res/top2024.png"),
  },
  {
    id: 2,
    text: "Top Talent 2023",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/top2023.png"),
  },
  {
    id: 3,
    text: "Bravo - Individual Awards",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/bravo.png"),
  },

  {
    id: 4,
    text: "GenAI Foundation - GenAI Assisted Coding using Amazon CdeWhisperer on FY 2023",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/genai.png"),
  },
  {
    id: 5,
    text: "Interviewers Certification Workshop",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/interview.png"),
  },
  {
    id: 6,
    text: "React Native - The Practical Guide",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/rn2024.png"),
  },

  {
    id: 7,
    text: "Master CI/CD for React Native",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/ci-cd.png"),
  },
  {
    id: 8,
    text: "Fastlane for React Native: Deploy your app autonomously!",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/fastlane.png"),
  },
  {
    id: 9,
    text: "The Git & Github Bootcamp",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/github-bootcamp.png"),
  },
  {
    id: 10,
    text: "The Complete React Native + Hooks Course",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/hook.png"),
  },
  {
    id: 11,
    text: "Android Studio Masterclass Conquer the Android IDE",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/android-certificate.png"),
  },
  {
    id: 12,
    text: "Android Unit Testing and Test Driven Development",
    review:
      "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
    value: require("../res/unit-testing.png"),
  },
];

export default function FifthSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="fifthSection"
      style={{ marginBlock: -35, backgroundColor: "#000000" }}
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
