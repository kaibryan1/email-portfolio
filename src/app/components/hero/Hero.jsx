"use client";

import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Title from "../title/Title"; //Title Component
import Description from "../description/Description"; //Description
import ImageMask from "@/app/animation/ImageMask/ImageMask"; //Image Mask Animation
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

// Data
import { _HERO } from "@/_data/_HERO";
const firstTitle = _HERO.title.firstTitle;
const secondTitle = _HERO.title.secondTitle;
const tag = _HERO.subtitle.tag;
const body = _HERO.subtitle.body;
const heroImage = _HERO.images.hero.handle;

export default function Hero() {
  return (
    <section className={`section ${styles.hero_section}`}>
      <div className={`container ${styles.hero_container}`}>
        <div className={styles.hero_wrapper}>
          <div className="grid-desktop">
            <Title firstLine={firstTitle} secondLine={secondTitle} />
          </div>
          <div className={`${styles.grid_row} grid-desktop`}>
            <Description tag={tag} body={body} />
            <ImageMask className={styles.heroImage}>
              <Image
                src={`/images/about/${heroImage}`}
                alt="Hero Image"
                width={1000}
                height={1000}
                className={styles.image}
              ></Image>
            </ImageMask>
          </div>
        </div>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </section>
  );
}
