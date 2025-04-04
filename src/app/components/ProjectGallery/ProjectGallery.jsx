import React from "react";
import styles from "./ProjectGallery.module.scss";
import Gallery from "../gallery/Gallery";
import Title from "../title/Title";
import Description from "../description/Description";
import GalleryDetails from "./GalleryDetails";

// Data
import { _PROJECTS } from "@/_data/_PROJECTS";
const firstLine = _PROJECTS.title.firstLine;
const secondLine = _PROJECTS.title.secondLine;
const tag = _PROJECTS.subtitle.tag;
const body = _PROJECTS.subtitle.body;
const projects = _PROJECTS.projects;

export default function ProjectGallery() {
  return (
    <section className="section section-padding-lg">
      <div className="container grid-desktop">
        <Title firstLine={firstLine} secondLine={secondLine} />
      </div>
      <div className={`container grid-desktop ${styles.descriptionWrapper}`}>
        <Description tag={tag} body={body} />
      </div>
      <div className={`container grid-desktop ${styles.projects}`}>
        <div className={styles.detailsWrapper}>
          {["Project 01", "Project 02", "Project 03"].map((data, i) => {
            return <GalleryDetails data={data} key={i} />;
          })}
        </div>
        <div className={`${styles.galleryWrapper}`}>
          <Gallery />
        </div>
      </div>
    </section>
  );
}
