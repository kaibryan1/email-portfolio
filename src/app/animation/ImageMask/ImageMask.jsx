import styles from "./ImageMask.module.scss";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ImageMask({ children, delay, start, className }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
    });

    gsap.delayedCall(0.4, () => {
      gsap.set(containerRef.current, {
        opacity: 1,
      });
      gsap.to(containerRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.8,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
        delay: delay || 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: start || "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`${className} ${styles.imageMask}`}>
      {children}
    </div>
  );
}
