import React from "react";
import styles from "./Projects.module.scss";
import Title from "../title/Title";
import Description from "../description/Description";
import ProjectCard from "./ProjectCard";

// Data
import { _PROJECTS } from "@/_data/_PROJECTS";
const firstLine = _PROJECTS.title.firstLine;
const secondLine = _PROJECTS.title.secondLine;
const tag = _PROJECTS.subtitle.tag;
const body = _PROJECTS.subtitle.body;
const projects = _PROJECTS.projects;

export default function Projects() {
  return (
    <section className={`section section-padding-lg`}>
      <div className="container grid-desktop">
        <Title firstLine={firstLine} secondLine={secondLine} />
      </div>
      <div className={`container grid-desktop ${styles.descriptionWrapper}`}>
        <Description tag={tag} body={body} />
      </div>
      <div className={`container grid-desktop ${styles.projectsWrapper}`}>
        {projects.map((project, index) => {
          return <ProjectCard data={project} key={index} index={index} />;
        })}
      </div>
    </section>
  );
}
