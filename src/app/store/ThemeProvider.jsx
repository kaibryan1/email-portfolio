"use client";

// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "@/styles/tokens/themeTokens";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Define default theme and mode here
  const [themeName, setThemeName] = useState("neue");
  const [mode, setMode] = useState("light");

  // A helper function to update both theme and mode
  const updateTheme = (newTheme, newMode) => {
    setThemeName(newTheme);
    setMode(newMode);
  };

  // Update CSS variables on theme or mode change
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "neue";
    if (storedTheme) {
      setThemeName(storedTheme); // Set theme from localStorage if it exists
    }

    const selectedAlias = themes[themeName].alias;
    const selectedTokens = themes[themeName][mode];
    if (selectedTokens && selectedAlias) {
      // Alias
      Object.entries(selectedAlias).forEach(([token, value]) => {
        document.documentElement.style.setProperty(token, value);
      });

      // Themes
      Object.entries(selectedTokens).forEach(([token, value]) => {
        document.documentElement.style.setProperty(token, value);
      });
    }
  }, [themeName, mode]);

  return (
    <ThemeContext.Provider value={{ themeName, mode, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context in any component
export const useTheme = () => useContext(ThemeContext);
