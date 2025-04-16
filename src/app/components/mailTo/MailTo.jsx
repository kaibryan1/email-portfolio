"use client";

import styles from "./MailTo.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/app/store/ToastProvider";

export default function MailTo({ mail }) {
  const [isHovered, setIsHovered] = useState(false);
  const { showToast } = useToast();

  //Use motion value to calc opacity
  const opacity = useMotionValue(0);
  // Derive the scale to the opacity, proxy animation
  const scale = useSpring(opacity, {
    stiffness: 500, //More Gravity
    damping: 20,
  });

  // Container ref
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  let ctaWidth = 0;
  let ctaHeight = 0;

  //   Config mouse x and y pos
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 50, stiffness: 350, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  //   Handle mouse move
  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    // Get the bounding box area
    const x = e.clientX - bounds.left - ctaWidth / 2;
    const y = e.clientY - bounds.top - ctaHeight * 1.2;
    // Set the cursor position relative to the bounding box
    mouse.x.set(x);
    mouse.y.set(y);
  };

  // Mouse Enter
  const handleMouseEnter = () => {
    setIsHovered(true);
    opacity.set(1);
  };

  // Mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    opacity.set(0);
  };

  const handleCopyMail = () => {
    navigator.clipboard
      .writeText(mail)
      .then(() => {
        showToast("Email copied to your clipboard");
      })
      .catch((err) => {
        console.error("Clipboard error:", err);
      });
  };

  // Animation
  useEffect(() => {
    if (buttonRef) {
      ctaWidth = buttonRef.current.offsetWidth;
      ctaHeight = buttonRef.current.offsetHeight;
    }

    //   Initialize mouse position on component mounts
    const container = containerRef.current;
    if (!container) return;

    // Initial position
    const bounds = container.getBoundingClientRect();
    const centerX = bounds.width / 2 - ctaWidth / 2;
    const centerY = bounds.height / 2 - ctaHeight / 2; //Becase top is default
    mouse.x.set(centerX);
    mouse.y.set(centerY);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      ref={containerRef}
      className={styles.container}
    >
      <a onClick={handleCopyMail} className={styles.mail}>
        <h3>{mail}</h3>
        <motion.span
          className={styles.flicker}
          variants={{
            initial: {
              x: "-120%",
            },
            hover: {
              x: "500%",
              transition: {
                duration: 1.2,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.4,
              },
            },
          }}
        ></motion.span>
      </a>
      <motion.div
        ref={buttonRef}
        className={styles.action}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          opacity,
          scale,
        }}
      >
        <p>Copy to clipboard</p>
        {/* <svg
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
        </svg> */}
      </motion.div>
    </motion.div>
  );
}
