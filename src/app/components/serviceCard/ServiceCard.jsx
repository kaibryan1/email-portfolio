"use client";
import styles from "./ServiceCard.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitHeadings from "@/app/animation/split/SplitHeadings";

import Tag from "../tag/Tag"; //components
import Pill from "../pill/Pill";

export default function ServiceCard({ card }) {
  return (
    <div className={`cardWrapper ${styles.card} container grid-desktop`}>
      <h1 className={`h2 ${styles.card_id}`}>{card.id}</h1>
      <h2 className={styles.card_title}>{card.title}</h2>
      <div className={styles.card_tag}>
        <Tag label={card.tag} />
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_body_content}>
          <p>{card.body}</p>
        </div>
        <div className={styles.pillWrapper}>
          {card.pills.map((pill, index) => {
            return <Pill key={index}>{pill}</Pill>;
          })}
        </div>
      </div>
    </div>
  );
}
