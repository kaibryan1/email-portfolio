"use client";

import styles from "./NavItem.module.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
import { useTheme } from "@/app/store/ThemeProvider";

export default function NavItem({ data, isActive, setIsActive, mouseY }) {
  const { id, label, sectionId, link } = data;
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

  const handleClick = () => {
    // If it is an external link
    if (link) {
      // External navigation
      window.open(link, "_blank");
      return;
    }

    const section = document.getElementById(sectionId);
    console.log(section);
    if (!section) return;

    gsap.to(window, {
      scrollTo: {
        y: section,
        offsetY: 0, // Optional: offset from the top
      },
      duration: 1.7,
      ease: "power2.inOut",
    });
  };

  return (
    <li
      ref={itemRef}
      className={`navItem ${themeName} ${styles.navItem} ${
        isInView ? styles.visible : ""
      } ${styles[themeName]}`}
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
      onClick={handleClick}
    >
      <div
        className={`${styles.textWrapper} ${isActive ? styles.hovered : ""}`}
      >
        <p
          ref={labelRef}
          className={`${styles.navItem_label} ${
            isActive ? styles.hovered : ""
          } ${styles[themeName]} ${themeName}`}
        >
          {label}
        </p>
        {link !== null && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" fill="" />
            <path
              d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H6.66634M14.1663 5.83301V13.333"
              stroke="#F5F2F0"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
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
