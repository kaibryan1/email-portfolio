"use client";

import React, { useState, useEffect } from "react";
import styles from "./MenuIcon.module.scss";
import Magnetic from "../magnetic/Magnetic";

export default function MenuIcon({ handleClick, setIsActive, isActive }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const shouldShow = currentScrollY >= window.innerHeight - 300;

          setIsVisible(shouldShow);

          if (!isVisible) {
            setIsActive(false);
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`${styles.menu} ${!isVisible ? styles.hidden : ""}`}
    >
      <Magnetic>
        <div className={`${styles.menu_icon} ${isActive ? styles.active : ""}`}>
          <span
            className={`${styles.burger} ${isActive ? styles.active : ""}`}
          ></span>
        </div>
      </Magnetic>
    </div>
  );
}
