"use client";

import { useRef, useEffect } from "react";
import styles from "./SwtichIcon.module.scss";
import { useTheme } from "@/app/store/ThemeProvider";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { AnimatePresence, motion } from "framer-motion";
import { scaleLabel } from "./SwitchAnimations";

export default function SwitchIcon({ handleClick, setIsActive, isActive }) {
  const switchRef = useRef(null);
  const { themeName } = useTheme();

  useEffect(() => {
    if (!switchRef.current) return;
    gsap.set(switchRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
    // Reveal Animation
    gsap.to(switchRef.current, {
      clipPath: "inset(0% 0% 0% 100%)",
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: switchRef.current,
        duration: 1.8,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    const handleScroll = () => {
      setIsActive(false);
      console.log("Scrolled event triggered");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={switchRef} onClick={handleClick} className={styles.switchIcon}>
      <div className={styles.labelWrapper}>
        {/* Arrow Up*/}
        <div className={styles.iconsMask}>
          <motion.div
            className={styles.iconsWrapper}
            initial={{ y: 0 }}
            animate={{
              y: isActive ? "-50%" : "0%",
              transition: { duration: 0.4 },
            }}
            exit={{ y: 0 }}
          >
            {themeName === "neue" ? (
              // Neue Arrow
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={styles.icon_stroke}
                    d="M12 5V19M12 5L6 11M12 5L18 11"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              // Pixel Arrow
              <svg
                className={styles.icon_fill}
                fill="#000000"
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="7,12 7,11 9,11 9,9 11,9 11,21 13,21 13,9 15,9 15,11 17,11 17,12 19,12 19,9 17,9 17,7 15,7 15,5 14,5 14,4 13,4 
13,3 11,3 11,4 10,4 10,5 9,5 9,7 7,7 7,9 5,9 5,12 "
                />
              </svg>
            )}
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.icon_stroke}
                  d="M6 6L18 18M18 6L6 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
        <AnimatePresence mode="wait">
          {!isActive && (
            <motion.div
              className={styles.label}
              variants={scaleLabel}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <p>Switch Theme</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
