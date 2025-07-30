import React from "react";
import styles from "./Loader.module.scss";
import { useEffect, useRef } from "react";

export default function Loader() {
  // Loader Component
  const loader = useRef(null);
  const path = useRef(null);
  // Initial Curve Value from 200px to Final Flat Line 0px
  const initialCurve = 200;
  // Loader Animation
  const duration = 600;
  let start;

  useEffect(() => {
    // Set the path
    setPath(initialCurve);
    // Set a delay for 0.5 second
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 800);

    // Hide Styles **
    document.body.style.opacity = "1";
  }, []);

  // Animation
  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);
  };

  // easing
  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  // Get the loader height
  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  // Draw SVG
  const setPath = (curve) => {
    const width = window.innerWidth; //SVG width to be full vw
    const height = loaderHeight(); //Height is the same as loader height

    // Draw the svg to be rect and curve in the middle vw
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
        height - curve
      } 0 ${height} L0 0`
    );
  };
  return (
    <div ref={loader} className={styles.loader}>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
