import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext(null);

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  // Default theme is taken as dark-theme
  if (!theme) {
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

// // src/context/ThemeContext.js
// import React, { useState } from "react";

// const ThemeContext = React.createContext(null);

// const ThemeProvider = ({ children }) => {
//   const [darkTheme, setDarkTheme] = useState("dark-theme");

//   const toggleTheme = () => {
//     if (darkTheme === "dark-theme") {
//       setDarkTheme("light-theme");
//     } else {
//       setDarkTheme("dark-theme");
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeProvider, ThemeContext };
