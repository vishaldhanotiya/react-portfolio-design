import React from "react";
import Home from "./Home.tsx";
import Achievements from "./Achievements.tsx";
import MyExperience from "./MyExperience.tsx";
import AboutMe from "./AboutMe.tsx";
import ContactUs from "./ContactUs.tsx";
import MyBlogs from "./MyBlogs.tsx";
import Skills from "./Skills.tsx";
import NavBar from "./NavBar.tsx";

const Portfolio = (props) => {
  return (
    <div>
      <NavBar />
      <Home {...props} />
      <AboutMe />
      <Skills />
      <MyExperience />
      <Achievements />

      <MyBlogs />

      <ContactUs />
    </div>
  );
};

export default Portfolio;
