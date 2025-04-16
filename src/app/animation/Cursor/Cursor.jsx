"use client";
import styles from "./Cursor.module.scss";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorSize = 20;

  //   Config mouse x and y pos
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 30, stiffness: 350, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  //   Handle mouse move
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  //   Initialize mouse position on component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className={styles.cursorContainer}>
      <motion.div
        className={styles.cursor}
        style={{ left: smoothMouse.x, top: smoothMouse.y }} //set mouse position
      ></motion.div>
    </div>
  );
}
