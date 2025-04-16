"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./Slider.module.scss";

export default function Slider({ speed, className, children }) {
  const sliderRef = useRef(null);
  const firstSliderRef = useRef(null);
  const secondSliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;
  let animSpeed = speed || 0.05;

  useEffect(() => {
    if (!firstSliderRef.current || !secondSliderRef.current) return;

    const firstSliderWidth = firstSliderRef.current.offsetWidth;

    gsap.set(secondSliderRef.current, {
      left: firstSliderWidth,
    });

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (!firstSliderRef.current || !secondSliderRef.current) return;

    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstSliderRef.current, {
      xPercent,
      force3D: true,
      roundProps: "x",
    });
    gsap.set(secondSliderRef.current, {
      xPercent,
      force3D: true,
      roundProps: "x",
    });
    xPercent += animSpeed * direction;

    requestAnimationFrame(animation);
  };

  const [firstChild, secondChild] = React.Children.toArray(children);

  return (
    <div ref={sliderRef} className={`${styles.sliderWrapper} ${className}`}>
      <div ref={firstSliderRef} className={styles.slider}>
        {firstChild}
      </div>
      <div ref={secondSliderRef} className={styles.slider}>
        {secondChild}
      </div>
    </div>
  );
}
