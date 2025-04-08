"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ThemeSwitcher.module.scss";
import ThemeSwitch from "./ThemeSwitch";
import SwitchIcon from "./SwitchIcon";
import useWindowWidth from "@/utils/useWindowWidth"; //Get window width
import { useTheme } from "@/app/store/ThemeProvider";

// Data
import { _THEMES } from "@/_data/_THEMES";
const { themes } = _THEMES;

export default function ThemeSwitcher() {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const { width } = useWindowWidth();
  const isMobile = width <= 750; //Overlay is hown only on mobile

  const { themeName, mode, updateTheme } = useTheme(); //Get theme name and mode from context

  const handleSwitch = (newTheme) => {
    const newMode = mode === "light" ? "light" : "dark"; //Add Mode Later
    updateTheme(newTheme, newMode);

    // Store inside Local Storage and Reload the browser
    localStorage.setItem("theme", newTheme);
    window.location.reload();
  };

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
        {isActive && isMobile && (
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
