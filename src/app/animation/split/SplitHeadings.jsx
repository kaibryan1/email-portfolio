"use client";

import styles from "./SplitPara.module.scss";
import React, { useRef, useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitHeadings({ children, className, ...props }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Select all heading and paragraph tags
    const elementsToSplit =
      containerRef.current.querySelectorAll("h1, h2, h3, h4, h5");

    // Keep track of all split instances for cleanup
    const splitInstances = [];

    elementsToSplit.forEach((el, i) => {
      const instance = new SplitType(el, { types: "chars" });
      instance.chars.forEach((cha) => cha.classList.add("wrapper"));
      const split = new SplitType(instance.chars, { types: "chars" });

      gsap.set(split.chars, { y: -120, opacity: 0 });

      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.01 * i,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      splitInstances.push(split);
    });

    return () => {
      // Revert all instances on cleanup
      splitInstances.forEach((instance) => instance.revert());
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
