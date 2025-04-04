import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Tag from "../tag/Tag"; //Tag compo

export default function ProjectCard({ data }) {
  const cover = data.projectCover;
  const { title, year, type, roles } = data;

  return (
    <div className={styles.card}>
      <div className={styles.card_imageWrapper}>
        <Image
          src={`/home`}
          alt="projectCoverImage"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className={styles.card_details}>
        <div className={styles.card_details_first}>
          <h4>{title}</h4>
          <Tag type="outline" label={year} />
        </div>
        <div className={styles.card_details_second}>
          <Tag type="normal" label={type} />
          <span className="flex-row-center flex-wrap gap-sm">
            {roles.map((role, index) => (
              <Tag key={index} type="outline" label={role} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
