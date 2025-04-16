"use client";
import styles from "./HeroNeue.module.scss";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Title from "../title/Title"; //Title Component
import Description from "../description/Description"; //Description
import ImageMask from "@/app/animation/ImageMask/ImageMask"; //Image Mask Animation

// Data
import { _HERO } from "@/_data/_HERO";
const firstTitle = _HERO.title.firstTitle;
const secondTitle = _HERO.title.secondTitle;
const tag = _HERO.subtitle.tag;
const body = _HERO.subtitle.body;
const heroImage = _HERO.images.hero.handle;

export default function HeroNeue() {
  const [isActive, setIsActive] = useState(null);
  const heroDelay = 0.8;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsActive(true);
    }, 1500);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <section
      id="section_hero"
      className={`section ${styles.hero_section} ${isActive && styles.active}`}
    >
      <div className={`container ${styles.hero_container}`}>
        <div className={styles.hero_wrapper}>
          <div className="grid-desktop">
            <Title
              firstLine={firstTitle}
              secondLine={secondTitle}
              delay={heroDelay}
            />
          </div>
          <div className={`${styles.grid_row} grid-desktop`}>
            <Description tag={tag} body={body} delay={heroDelay} />
            <ImageMask delay={heroDelay} className={styles.heroImage}>
              <Image
                src={`/images/about/${heroImage}`}
                alt="Hero Image"
                width={1000}
                height={1000}
                className={styles.image}
              ></Image>
              <div className={styles.blur}></div>
            </ImageMask>
          </div>
        </div>
      </div>
    </section>
  );
}
