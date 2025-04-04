import styles from "./NavItem.module.scss";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function NavItem({ label, id, isActive, setIsActive, mouseY }) {
  const itemRef = useRef(null);
  const backDropRef = useRef(null);
  const [enterDirection, setEnterDirection] = useState("top");

  const handleMouseEnter = () => {
    setIsActive(id);
    if (!itemRef.current) return;

    const { top, bottom } = itemRef.current.getBoundingClientRect();
    const slideDirection = mouseY < (top + bottom) / 2 ? "top" : "bottom";
    setEnterDirection(slideDirection);
  };

  const handleMouseLeave = (event) => {
    if (!itemRef.current) return;

    const { top, bottom } = itemRef.current.getBoundingClientRect();
    const slideDirection =
      event.clientY < (top + bottom) / 2 ? "top" : "bottom";
    setEnterDirection(slideDirection);
    setIsActive(null);
  };
  return (
    <li
      ref={itemRef}
      className={styles.navItem}
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <p
        className={`${styles.navItem_label} ${isActive ? styles.hovered : ""}`}
      >
        {label}
      </p>
      <div className={styles.navItem_backdrop}></div>
      <motion.span
        ref={backDropRef}
        className={styles.backDrop}
        initial={{ y: enterDirection === "top" ? "-100%" : "100%" }}
        animate={{
          y: isActive ? "0%" : enterDirection === "top" ? "-100%" : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </li>
  );
}
