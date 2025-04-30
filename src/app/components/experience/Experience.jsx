"use client";

import { useState } from "react";
import styles from "./Experience.module.scss";
import Title from "../title/Title"; //Title compo
import Description from "../description/Description"; //Description compo
import ExperienceRow from "./ExperienceRow";
import Gallery from "../gallery/Gallery";

// Data
import { _EXPERIENCE } from "@/_data/_EXPERIENCE";
const firstLine = _EXPERIENCE.title.firstLine;
const secondLine = _EXPERIENCE.title.secondLine;
const tag = _EXPERIENCE.subtitle.tag;
const body = _EXPERIENCE.subtitle.body;
const experiences = _EXPERIENCE.experiences;

export default function Experience() {
  const [isActive, setIsActive] = useState(null);
  const handleMouseEnter = (id) => {
    // setIsActive(id);
  };

  const handleMouseLeave = (id) => {
    // setIsActive(null);
  };

  return (
    <section
      id="section_experience"
      className={`section section-padding-lg ${styles.section_experience}`}
    >
      <div className={`container grid-desktop`}>
        <Title firstLine={firstLine} secondLine={secondLine} />
      </div>
      <div className="grid-desktop">
        <Description tag={tag} body={body} />
      </div>

      <ul className={`container grid-desktop ${styles.listWrapper}`}>
        {/* Gallery */}
        <div className={styles.galleryWrapper}>
          <Gallery></Gallery>
        </div>
        {experiences.map((data, index) => (
          <ExperienceRow
            handle={data.image}
            data={data}
            key={index}
            onEnter={() => handleMouseEnter(data.id)}
            onLeave={() => handleMouseLeave(data.id)}
            setIsActive={setIsActive}
            isActive={isActive === data.id}
          />
        ))}
      </ul>
    </section>
  );
}
