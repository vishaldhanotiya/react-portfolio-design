import React from "react";
import "./Blog.scss";
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
    <section className="blog-container" id="blog">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-list">
        <div className="blog-image1">
          <p className="blog-text">{"What is React Native?"}</p>
          <p className="blog-sub-text">
            {
              "React Native helps to develop cross-platform applications for android and iOS."
            }
          </p>
        </div>
        <div className="blog-image2">
          <p className="blog-text">
            {"Sign In with Google in the React  Expo"}
          </p>
          <p className="blog-sub-text">
            {"Explain Google sign integration for react native expo"}
          </p>
        </div>
        <div className="blog-image3">
          <p className="blog-text">{"Expo CLI vs React Native CLI"}</p>
          <p className="blog-sub-text">
            {
              "There are two popular ways to create a React Native app- Expo CLI or React Native CLI"
            }
          </p>
        </div>
        <div className="blog-image4">
          <p className="blog-text">
            {"Coding Best Practices for React Native"}
          </p>
          <p className="blog-sub-text">
            {"The purpose of this document is to detail the code conventions"}
          </p>
        </div>
      </div>
    </section>
  );
}
