//import liraries
import React from "react";
import "../components/NavBar.scss";

// create a component
const NavBar = () => {
  return (
    <header>
      <nav className="nav-container">
        <img
          className="my-logo"
          alt="my-logo"
          src={require("../res/logo.gif")}
        />
        <div className="nav-menu">
          <p className="nav-text">
            <a href="#firstSection">Home</a>
          </p>
          <p className="nav-text">
            <a href="#secondSection">About me</a>
          </p>
          <p className="nav-text">
            <a href="#thirdSection">My Skills</a>
          </p>
          <p className="nav-text">
            <a href="#fourthSection">Experience</a>
          </p>
          <p className="nav-text">
            <a href="#fifthSection">Achievement</a>
          </p>
          <p className="nav-text">
            <a href="#sixthSection">Blog</a>
          </p>
          <p className="nav-text">
            <a href="#seventhSection">Contact</a>
          </p>
        </div>
        <img
          alt="my-logo"
          className="menu-logo"
          src={require("../res/menu.png")}
        />
      </nav>
    </header>
  );
};

export default NavBar;
