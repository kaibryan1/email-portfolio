import React from "react";
import styles from "./ServiceCard.module.scss";
import Tag from "../tag/Tag";
import Pill from "../pill/Pill";

export default function ServiceCard({ card }) {
  return (
    <div className={`cardWrapper ${styles.card} container grid-desktop`}>
      <h1 className={`h2 ${styles.card_id}`}>{card.id}&nbsp;</h1>
      <h2 className={styles.card_title}>{card.title}</h2>
      <div className={styles.card_tag}>
        <Tag label={card.tag} />
      </div>
      <div className={styles.card_body}>
        <p>{card.body}</p>
        <div className={styles.pillWrapper}>
          {card.pills.map((pill, index) => {
            return <Pill key={index}>{pill}</Pill>;
          })}
        </div>
      </div>
    </div>
  );
}
