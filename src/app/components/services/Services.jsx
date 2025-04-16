"use client";
import styles from "./Services.module.scss";
import Title from "../title/Title"; //Title Compo
import Description from "../description/Description"; //Description Compo
import ServiceCard from "../serviceCard/ServiceCard"; //Card

// DATA
import { _SERVICES } from "@/_data/_SERVICES";
const firstTitle = _SERVICES.title.firstLine;
const secondTitle = _SERVICES.title.secondLine;
const tag = _SERVICES.subtitle.tag;
const body = _SERVICES.subtitle.body;
const cards = _SERVICES.cards;

export default function Services() {
  return (
    <section
      id="section_services"
      className={`section section-padding-lg  ${styles.serviceWrapper}`}
    >
      <div className={`container grid-desktop`}>
        <Title firstLine={firstTitle} secondLine={secondTitle} />
      </div>
      <div className="container grid-desktop descriptionWrapper">
        <Description tag={tag} body={body} />
      </div>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => {
          return <ServiceCard card={card} key={index} />;
        })}
      </div>
    </section>
  );
}
