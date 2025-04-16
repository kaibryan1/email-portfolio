"use client";

import React from "react";
import styles from "./Magnetic.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const xTo = clientX - (left + width / 2);
    const yTo = clientY - (top + height / 2);
    setPosition({ x: xTo, y: yTo });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      styles={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
