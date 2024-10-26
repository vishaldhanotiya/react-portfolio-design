import React, { useContext } from "react";
import "../components/Home.scss";
import Type from "./Type.tsx";
import { ThemeContext } from "./ThemeProvider.tsx";
import facebook from "../res/facebook.png";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  console.log("Home===", darkTheme);

  return (
    <section id="home" className="home-container">
      <div className="name-container">
        <h1 className="title">
          Hello There! <span className="wave-emoji">👋🏻</span>
          <br></br>
          I'm <span>Vishal Dhanotiya</span>
        </h1>

        <p className="description">
          <Type />
        </p>

        <div className="social-section">
          <span className="circle">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/vishaldhanotiya"
            >
              <img
                alt="github"
                src={require("../res/github.png")}
                className="img"
              />
            </a>
          </span>
          <span className="circle">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/vishal.dhanotiya.75/"
            >
              <img alt="facebook" src={facebook} className="img" />
            </a>
          </span>
          <span className="circle">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/9158543/vishal-dhanotiya"
            >
              <img
                alt="media"
                src={require("../res/stackoverflow.png")}
                className="img"
              />
            </a>
          </span>
          <span className="circle">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://in.linkedin.com/in/vishal-dhanotiya-a7966599"
            >
              <img
                alt="linkedin"
                src={require("../res/linkedin.png")}
                className="img"
              />
            </a>
          </span>
        </div>
      </div>
      <div>
        <img
          alt="my-logo"
          className="my-photo"
          src={require("../res/myy.png")}
        />
      </div>
    </section>
  );
};

export default Home;
