import React from "react";
import styles from "./Title.module.scss";

export default function Title({ firstLine, secondLine }) {
  return (
    <div className={styles.title}>
      <h2 className={styles.title_rightAligned}>{secondLine}</h2>
      <h1 className={styles.title_leftAligned}>{firstLine}</h1>
    </div>
  );
}
