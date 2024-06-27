import React from "react";
import "./MyBlogs.scss";
const gridImage = [
  {
    text: "What is React Native?",
    subTitle:
      "React Native helps to develop cross-platform applications for android and iOS.",
    value: require("../res/react-native.png"),
  },
  {
    text: "Sign In with Google in the React  Expo",
    subTitle: `Explain Google sign integration for react native expo`,
    value: require("../res/google-sign-in.png"),
  },
  {
    text: "Expo CLI vs React Native CLI",
    subTitle: `There are two popular ways to create a React Native app- Expo CLI or React Native CLI.`,
    value: require("../res/expo-cli.png"),
  },
  {
    text: "Coding Best Practices for React Native",
    subTitle: `The purpose of this document is to detail the code conventions.`,
    value: require("../res/react-native.png"),
  },
];

export default function MyBlogs() {
  return (
    <div className="blog-container" id="sixthSection">
      <p className="sixth-title">My Blog</p>

      <div className="blog-list">
        {gridImage.map((item, index) => {
          return (
            <div
              style={{
                margin: 15,
                height: 300,
                backgroundColor: "#f0f0f0",
                width: 300,
                fontWeight: "500",
                borderRadius: 5,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), #000),url(${item.value})`,
              }}
            >
              <div className="blog-text-container">
                <p className="blog-title">{item.text}</p>
                <p className="blog-content">{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
