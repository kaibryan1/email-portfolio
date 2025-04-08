"use client";

import styles from "./NavItem.module.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useTheme } from "@/app/store/ThemeProvider";

export default function NavItem({ label, id, isActive, setIsActive, mouseY }) {
  const itemRef = useRef(null);
  const labelRef = useRef(null);
  const isInView = useInView(itemRef);
  const { themeName, mode, updateTheme } = useTheme();

  const backDropRef = useRef(null);
  const [enterDirection, setEnterDirection] = useState("top");

  const handleMouseEnter = () => {
    setIsActive(id);
    if (!itemRef.current) return;

    const { top, bottom } = itemRef.current.getBoundingClientRect();
    const slideDirection = mouseY < (top + bottom) / 2 ? "top" : "bottom";
    setEnterDirection(slideDirection);
  };

  const handleMouseLeave = (event) => {
    if (!itemRef.current) return;

    const { top, bottom } = itemRef.current.getBoundingClientRect();
    const slideDirection =
      event.clientY < (top + bottom) / 2 ? "top" : "bottom";
    setEnterDirection(slideDirection);
    setIsActive(null);
  };

  useEffect(() => {
    if (!itemRef.current) return;

    gsap.set(itemRef.current, { clipPath: "inset(0% 100% 0% 0%)" });
    // Reveal Animation
    gsap.to(itemRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power2.out",
      delay: 0.1 * id,
      scrollTrigger: {
        trigger: itemRef.current,
        duration: 1.2,
        start: "top 90%",
        ease: "power3.out",
      },
    });
  }, []);

  return (
    <li
      ref={itemRef}
      className={`navItem ${themeName} ${styles.navItem} ${
        isInView ? styles.visible : ""
      } ${styles[themeName]}`}
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <div className="wrap_line">
        <p
          ref={labelRef}
          className={`${styles.navItem_label} ${
            isActive ? styles.hovered : ""
          } ${styles[themeName]} ${themeName}`}
        >
          {label}
        </p>
      </div>
      <motion.span
        ref={backDropRef}
        className={`backdrop ${styles.backDrop}`}
        initial={{ y: enterDirection === "top" ? "-100%" : "100%" }}
        animate={{
          y: isActive ? "0%" : enterDirection === "top" ? "-100%" : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </li>
  );
}
