"use client";

// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "@/styles/tokens/themeTokens";
import SplashScreen from "../components/splashscreen/SplashScreen";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Define default theme and mode here
  const [themeName, setThemeName] = useState("neue");
  const [mode, setMode] = useState("light");
  const [isChangingTheme, setIsChangingTheme] = useState(false); // New state for tracking theme changes

  // A helper function to update both theme and mode
  const updateTheme = (newTheme, newMode) => {
    // Show splash screen during theme change
    setIsChangingTheme(true);

    // Small delay to ensure splash screen renders before changing theme
    setTimeout(() => {
      setThemeName(newTheme);
      setMode(newMode || mode); // Keep current mode if not specified
    }, 50);
  };

  // Funtion to switch mode
  const updateMode = (newMode) => {
    setMode(newMode);
  };

  // Theme application effect
  useEffect(() => {
    const skipTheme = localStorage.getItem("skipThemeApply") === "true";
    if (skipTheme) {
      return; // Skip applying theme just before reload
    }

    const storedTheme = localStorage.getItem("theme") || "neue";
    const appliedTheme = themes[storedTheme];
    if (appliedTheme) {
      setThemeName(storedTheme); // Set theme from localStorage if it exists

      // Safely set theme on <html>
      if (typeof window !== "undefined" && document?.documentElement) {
        document.documentElement.dataset.theme = storedTheme;
      }
    }

    const selectedAlias = appliedTheme.alias;
    const selectedTokens = appliedTheme[mode];
    if (selectedTokens && selectedAlias) {
      // Apply alias tokens
      Object.entries(selectedAlias).forEach(([token, value]) => {
        document.documentElement.style.setProperty(token, value);
      });

      // Apply theme tokens
      Object.entries(selectedTokens).forEach(([token, value]) => {
        document.documentElement.style.setProperty(token, value);
      });

      // Hide splash screen after a short delay to ensure smooth transition
      setTimeout(() => {
        setIsChangingTheme(false);
      }, 500);
    }
  }, [themeName, mode]);

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        mode,
        updateTheme,
        updateMode,
        isChangingTheme,
        setIsChangingTheme,
      }}
    >
      <SplashScreen show={isChangingTheme} />
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context in any component
export const useTheme = () => useContext(ThemeContext);
