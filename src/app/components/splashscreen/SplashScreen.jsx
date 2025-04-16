// components/SplashScreen.jsx
"use client";
import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.scss";

export default function SplashScreen({ show }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // If not showing, start fade out animation
    if (!show) {
      setFadeOut(true);
    } else {
      setFadeOut(false);
    }
  }, [show]);

  if (!show && fadeOut === false) return null;

  return (
    <div className={`${styles.splashScreen} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.content}>
        {/* <div className={styles.spinner}></div> */}
        <p className={styles.text}>Loading theme...</p>
      </div>
    </div>
  );
}
