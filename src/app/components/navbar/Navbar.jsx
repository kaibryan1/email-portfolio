"use client";

import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import NavListItems from "../navListItems/NavListItems"; //Nav List
import NavListPixel from "../navListItems/NavListPixel"; //Nav List Pixel
import TimeCode from "../timecode/TimeCode"; //Time Code
import { useTheme } from "@/app/store/ThemeProvider";
import useWindowWidth from "@/utils/useWindowWidth";

// Data
import { _NAVBAR } from "@/_data/_NAVBAR";
const navList = _NAVBAR.navList;
const logo_pixel = _NAVBAR.logo.pixel.handle;
const logo_neue = _NAVBAR.logo.neue.handle;

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const { themeName } = useTheme();
  const { width } = useWindowWidth();
  const desktop = width >= 750;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} section`}>
      <motion.div
        className={`container grid-desktop`}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3, ease: easeOut },
        }}
        exit={{ opacity: 1 }}
      >
        <div className={styles.logo_wrapper}>
          <div className={styles.typemark}>
            <p>KAI BRYANT© CREATIVE</p>
            <p>⸺ WEB & UX DESIGNER</p>
          </div>
        </div>
        <div className={styles.timeWrapper}>
          <TimeCode />
        </div>
        <div className={styles.navListWrapper}>
          {themeName === "neue" ? (
            desktop && <NavListItems navList={navList} />
          ) : (
            <NavListPixel navList={navList} />
          )}
        </div>
      </motion.div>
    </nav>
  );
}
