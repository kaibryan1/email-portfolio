"use client";
import styles from "./HeroPixel.module.scss";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Title from "../title/Title"; //Title Component
import Description from "../description/Description"; //Description
import Background from "@/app/animation/background/Background";
import SpriteAnimator from "@/app/animation/spriteAnim/SpriteAnimator";

// Data
import { _HERO } from "@/_data/_HERO";
const firstTitle = _HERO.title.firstTitle;
const secondTitle = _HERO.title.secondTitle;
const tag = _HERO.subtitle.tag;
const body = _HERO.subtitle.body;
const heroImage = _HERO.images.hero.handle;

export default function HeroPixel() {
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
      className={`section section-padding-lg ${styles.section_hero}`}
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
            <div delay={heroDelay} className={styles.heroImage}>
              <div className={styles.spriteCharacter}>
                <SpriteAnimator src="/sprite_sheet.png" scale={0.64} fps={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </section>
  );
}
