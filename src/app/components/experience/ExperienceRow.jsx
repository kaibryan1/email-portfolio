"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import useWindowWidth from "@/utils/useWindowWidth";
import styles from "./ExperienceRow.module.scss";
import Tag from "../tag/Tag"; //Tag Compo

export default function ExperienceRow({ data, isActive, onEnter, onLeave }) {
  const itemRef = useRef(null);
  const { width } = useWindowWidth();
  const isMobile = width < 750;

  // Animation Effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      const el = itemRef.current;

      // Since setting fonts via js, we need to sync after the font is loaded
      document.fonts.ready.then(() => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: `top ${isMobile ? "40%" : "60%"}`,
            end: `bottom ${isMobile ? "40%" : "55%"}`,
            toggleClass: { targets: el, className: styles.hovered },
          },
        });

        ScrollTrigger.refresh();
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  //Data
  const { id, title, body, year, type, hashTags } = data;
  return (
    <li
      ref={itemRef}
      className={`${styles.row}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={styles.row_wrapper}>
        <div className={styles.row_first}>
          <div>
            <h4 className={isActive ? styles.hovered : ""}>{title}</h4>
            <p className={`body-sm ${styles.body}`}>{body}</p>
          </div>
          <span className={styles.row_first_year}>
            <Tag label={year} type="filled" state={isActive ? "hovered" : ""} />
          </span>
        </div>
        <div className={styles.row_second}>
          <Tag label={type} state={isActive ? "hovered" : ""} />
          <span className="flex-row-center flex-wrap gap-sm">
            {hashTags.map((tag, index) => (
              <Tag
                label={tag}
                key={index}
                type={"outline"}
                state={isActive ? "hovered" : ""}
              />
            ))}
            <Tag
              label={year}
              type={"filled"}
              state={isActive ? "hovered" : ""}
              className={`${styles.tag} ${styles.row_second_year}`}
            />
          </span>
        </div>
      </div>
    </li>
  );
}
