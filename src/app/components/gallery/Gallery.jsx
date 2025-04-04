import styles from "./Gallery.module.scss";
import React from "react";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { _EXPERIENCE } from "@/_data/_EXPERIENCE";
import Vignette from "../vignette/Vignette";

export default function Gallery() {
  const vignetteRef = useRef(null);
  const isInView = useInView(vignetteRef);

  useEffect(() => {
    if (isInView && vignetteRef.current) {
      vignetteRef.current.classList.add("inView");
    } else if (!isInView && vignetteRef.current) {
      vignetteRef.current.classList.remove("inView");
    }
  }, [isInView]);

  const gallery = _EXPERIENCE.gallery;

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  return (
    <motion.div
      ref={vignetteRef}
      className={styles.wrapper}
      initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
      animate={{
        clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
        transition: { duration: 0.6, delay: 0.2, ...spring },
      }}
      exit={{
        clipPath: "inset(0% 50% 0% 50%)",
        transition: { duration: 0.1 },
      }}
    >
      {gallery.map((image, i) => (
        <Vignette key={i} handle={image.handle} />
      ))}
    </motion.div>
  );
}
