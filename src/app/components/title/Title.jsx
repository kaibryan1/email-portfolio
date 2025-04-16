import React from "react";
import styles from "./Title.module.scss";
import SplitHeadings from "@/app/animation/split/SplitHeadings";

export default function Title({ firstLine, secondLine, delay }) {
  return (
    <SplitHeadings delay={delay} className={styles.title}>
      <h2 className={styles.title_rightAligned}>{secondLine}</h2>
      <h1 className={styles.title_leftAligned}>{firstLine}</h1>
    </SplitHeadings>
  );
}
