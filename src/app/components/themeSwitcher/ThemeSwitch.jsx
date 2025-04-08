"use client";
import styles from "./ThemeSwitch.module.scss";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Tag from "../tag/Tag";
import { switchSlide } from "./SwitchAnimations";

export default function ThemeSwitch({
  activeIndex,
  setActiveIndex,
  onSwitch,
  data,
  index,
}) {
  const { theme, handle, title, body } = data;
  const shader = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setActiveIndex(storedTheme);
    if (!shader.current && !detailsRef.current) return;

    gsap.set(shader.current, {
      clipPath: "inset(100% 0% 0% 0%)",
    });
  }, []);

  const handleClick = () => {
    if (activeIndex !== theme) {
      onSwitch(data.theme);
      setActiveIndex(data.theme);
    }
  };

  const handleEnter = () => {
    gsap.to(shader.current, {
      duration: 0.8,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(shader.current, {
      duration: 0.8,
      clipPath: "inset(100% 0% 0% 0%)",
      ease: "power3.out",
    });
  };

  return (
    <li onClick={handleClick} className={styles.switchWrapper}>
      <motion.div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={styles.switch}
        custom={index}
        variants={switchSlide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={`/images/themes/${handle}`}
            width={400}
            height={400}
            alt="Theme Preview Website Cover Image"
          ></Image>
        </div>
        {/* Details */}
        <div ref={detailsRef} className={styles.details}>
          <Tag className={styles.tag}>{title}</Tag>
          <p className={styles.body}>{body}</p>
        </div>
        {/* Shader */}
        <div ref={shader} className={styles.shader}></div>
      </motion.div>
    </li>
  );
}
