"use client";
import { useState, useEffect } from "react";
import styles from "./TimeCode.module.scss";
import Tag from "../tag/Tag";
import { useTheme } from "@/app/store/ThemeProvider";

export default function TimeCode() {
  const [time, setTime] = useState(null);
  const { isChangingTheme } = useTheme();

  useEffect(() => {
    if (isChangingTheme) return;

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <span className={styles.timecode}>
      <Tag
        className={styles.timeTag}
        type="normal"
        label="[local time: GMT+7]"
      />
      <p className={styles.timer}>{time && time.toLocaleTimeString()}</p>
    </span>
  );
}
