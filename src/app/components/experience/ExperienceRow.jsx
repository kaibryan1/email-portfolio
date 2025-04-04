"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "./ExperienceRow.module.scss";
import Tag from "../tag/Tag"; //Tag Compo

export default function ExperienceRow({ data, isActive, onEnter, onLeave }) {
  const itemRef = useRef(null);

  // Animation Effect
  useEffect(() => {
    ScrollTrigger.refresh();
    const el = itemRef.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        end: "bottom 55%",
        toggleClass: { targets: itemRef.current, className: styles.hovered },
      },
    });

    return () => {
      window.removeEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    };
  }, []);

  if (window) {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }

  //Data
  const { id, title, year, type, hashTags } = data;
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
            <p className={`body-sm ${styles.body}`}>
              Some of my freelance projects that has made positive impact on
              people’s lives and solved business problems.
            </p>
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
