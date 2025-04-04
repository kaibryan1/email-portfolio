import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Title from "../title/Title";
import Description from "../description/Description";

// Data
import { _ABOUT } from "@/_data/_ABOUT";
const firstLine = _ABOUT.title.firstLine;
const secondLine = _ABOUT.title.secondLine;
const tag = _ABOUT.subtitle.tag;
const body = _ABOUT.subtitle.body;
const handle = _ABOUT.image.handle;
const alt = _ABOUT.image.alt;

export default function About() {
  return (
    <section className={`section section-padding-lg ${styles.section_about}`}>
      <div className="container grid-desktop">
        <Title firstLine={firstLine} secondLine={secondLine}></Title>
      </div>
      <div className={`container grid-desktop ${styles.about_image}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={`/images/about/${handle}.png`}
            alt={alt}
            width="500"
            height="500"
          ></Image>
        </div>
        <Description tag={tag} body={body} />
      </div>
    </section>
  );
}
