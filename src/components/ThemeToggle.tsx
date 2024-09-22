// src/components/ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider.tsx";

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext) || {
    darkTheme: "light-theme",
    toggleTheme: () => {},
  };

  return (
    <div className="theme-toggle d-flex align-items-center">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkTheme === "light-theme" ? true : false}
          onChange={toggleTheme}
          className="toggle-input"
        />
        <span className="slider round"></span>
      </label>
      <p className="px-2">{darkTheme ? "Dark Theme" : "Light Theme"}</p>
    </div>
  );
};

export default ThemeToggle;
