"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ThemeSwitcher.module.scss";
import ThemeSwitch from "./ThemeSwitch";
import SwitchIcon from "./SwitchIcon";
import { useTheme } from "@/app/store/ThemeProvider";

// Data
import { _THEMES } from "@/_data/_THEMES";
const { themes } = _THEMES;

export default function ThemeSwitcher() {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const { themeName, mode, updateTheme, updateMode } = useTheme(); //Get theme name and mode from context

  const handleSwitch = (newTheme) => {
    const newMode = mode === "light" ? "light" : "dark"; // Ignore this we will add switch Mode Later
    updateTheme(newTheme, newMode);

    // Store inside Local Storage and Reload the browser
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("skipThemeApply", "true");
    setIsActive(false);
    // Add a delay here
    window.location.reload();
  };

  useEffect(() => {
    // Remove the skipTheme flag after the first render
    const skipTheme = localStorage.getItem("skipThemeApply") === "true";
    if (skipTheme) {
      localStorage.removeItem("skipThemeApply");
    }
  }, []);

  return (
    <div className={styles.themeSwitcher}>
      <AnimatePresence mode="wait">
        {isActive && (
          <ul className={styles.switchContainer}>
            {themes.map((theme, index) => (
              <ThemeSwitch
                // activeIndex={activeIndex === theme.theme}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onSwitch={handleSwitch}
                data={theme}
                key={theme.title}
                index={index}
              />
            ))}
          </ul>
        )}
      </AnimatePresence>
      <SwitchIcon
        handleClick={() => setIsActive(!isActive)}
        setIsActive={setIsActive}
        isActive={isActive}
      ></SwitchIcon>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={`overlay ${styles.overlay}`}
            onClick={() => setIsActive(!isActive)}
            style={{ cursor: "pointer", zIndex: 9 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
