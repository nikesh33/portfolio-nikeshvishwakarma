import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Get the initial theme from localStorage or default to dark mode (true)
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  const toggleDarkLightMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Store theme in localStorage
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkLightMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
