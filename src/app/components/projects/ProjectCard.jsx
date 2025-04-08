import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Tag from "../tag/Tag"; //Tag compo
import SplitHeadings from "@/app/animation/split/SplitHeadings";
import ImageMask from "@/app/animation/ImageMask/ImageMask";

export default function ProjectCard({ data, index }) {
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
        <SplitHeadings className={styles.card_details_first}>
          <h3>{title}</h3>
          <Tag type="outline" label={year} />
        </SplitHeadings>
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
