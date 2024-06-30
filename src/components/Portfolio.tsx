import React from "react";
import Home from "./Home.tsx";
import Achievement from "./Achievement.tsx";
import Experience from "./Experience.tsx";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import Blog from "./Blog.tsx";
import Skills from "./Skills.tsx";
import NavBar from "./NavBar.tsx";

const Portfolio = (props) => {
  return (
    <div>
      <NavBar />
      <Home {...props} />
      <AboutMe />
      <Skills />
      <Experience />
      <Achievement />
      <Blog />
      <Contact />
    </div>
  );
};

export default Portfolio;
