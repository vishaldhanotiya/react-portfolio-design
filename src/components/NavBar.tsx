import React, { useEffect, useState } from "react";
import "../components/NavBar.scss";

const NavBar = () => {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowSize;
  };

  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1000) {
      setShowMenu(false);
    }
    console.log(width);
  }, [width]);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav className="nav-container">
        <img
          className="my-logo"
          alt="my-logo"
          src={require("../res/logo.gif")}
        />
        <div className={showMenu ? "nav-menu-open" : "nav-menu"}>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#firstSection">Home</a>
          </p>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#secondSection">About me</a>
          </p>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#thirdSection">My Skills</a>
          </p>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#fourthSection">Experience</a>
          </p>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#fifthSection">Achievement</a>
          </p>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#sixthSection">Blog</a>
          </p>
          <p onClick={() => setShowMenu(false)} className="nav-text">
            <a href="#seventhSection">Contact</a>
          </p>
        </div>
        <img
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          alt="menu-logo"
          className="menu-logo"
          src={
            showMenu ? require("../res/close.png") : require("../res/menu.png")
          }
        />
      </nav>
    </header>
  );
};

export default NavBar;
