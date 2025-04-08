"use client";

import styles from "./SplitPara.module.scss";
import SplitType from "split-type";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitPara({ children, className, ...props }) {
  const containerRef = useRef(null);
  const targetElements = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Select all heading and paragraph tags
    const elementsToSplit = containerRef.current.querySelectorAll("p");

    // Keep track of all split instances for cleanup
    // const splitInstances = [];

    elementsToSplit.forEach((el) => {
      const instance = new SplitType(el, { types: "words" });
      instance.words.forEach((word) => word.classList.add("wrapper"));
      const split = new SplitType(instance.words, { types: "words" });

      gsap.set(split.words, { y: 120, opacity: 0 });

      gsap.to(split.words, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      targetElements.current.push(split);
    });

    return () => {
      // Revert all instances on cleanup
      targetElements.current.forEach((instance) => instance.revert());
    };
  }, []);

  return (
    <div ref={containerRef} className={`${className} ${styles.containerRef}`}>
      {children}
    </div>
  );
}
