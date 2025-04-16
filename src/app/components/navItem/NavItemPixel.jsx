import React from "react";
import styles from "./NavItemPixel.module.scss";

export default function NavItemPixel({ handle, label }) {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_icon}>
        <img src={handle} alt={`Pixel art icon of ${label}`} />
      </div>
      <p className={styles.nav_label}>{label}</p>
    </div>
  );
}
