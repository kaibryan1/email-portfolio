"use client";

import styles from "./Gallery.module.scss";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { _EXPERIENCE } from "@/_data/_EXPERIENCE";
import Vignette from "../vignette/Vignette";
const gallery = _EXPERIENCE.experiences;

export default function Gallery() {
  const vignetteRef = useRef(null);
  // const isInView = useInView(vignetteRef);

  useEffect(() => {
    if (!vignetteRef.current) return;

    gsap.fromTo(
      vignetteRef.current,
      {
        clipPath: "inset(0% 50% 0% 50%)", // FROM
      },
      {
        clipPath: "inset(0% 0% 0% 0%)", // TO
        duration: 0.8,
        scrollTrigger: {
          trigger: vignetteRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []); //Add is in view if framer motion

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  return (
    <div ref={vignetteRef} className={styles.wrapper}>
      {gallery.map((image, i) => (
        <Vignette key={i} handle={image.image} />
      ))}
    </div>
  );
}
