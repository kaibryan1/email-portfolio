"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Curve.module.scss";

export default function Curve({ isActive }) {
  const [paths, setPaths] = useState({ initial: "", target: "" });

  useEffect(() => {
    const h = window.innerHeight;
    console.log(h);
    const initialPath = `M100 0 L100 ${h} Q-100 ${h / 2} 100 0`;
    const targetPath = `M100 0 L100 ${h} Q100 ${h / 2} 100 0`;
    setPaths({ initial: initialPath, target: targetPath });
  }, []);

  const curve = {
    initial: { d: paths.initial },
    enter: {
      d: paths.target,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: paths.initial,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  if (!paths.initial) return null; // or a fallback UI

  return (
    <div className={`curveWrapper ${styles.curveWrapper}`}>
      <svg className={`curve ${styles.svgCurve}`}>
        <motion.path
          variants={curve}
          initial="initial"
          animate={isActive ? "enter" : "initial"}
          exit="exit"
        />
      </svg>
    </div>
  );
}
