import React from "react";
import styles from "./Description.module.scss";
import Tag from "../tag/Tag"; //Tag Compo
import SplitPara from "@/app/animation/split/SplitPara";

export default function Description({ tag, body, delay }) {
  return (
    <>
      <div className={`tag ${styles.description_tag}`}>
        <Tag label={tag} type="normal" />
      </div>
      {Array.isArray(body) ? (
        <SplitPara
          className={`description ${styles.description_body} ${styles.description_array}`}
          delay={delay}
        >
          {body.map((para, i) => {
            return (
              <p key={i} className={`description ${styles.description_body}`}>
                {para}
              </p>
            );
          })}
          <br />
        </SplitPara>
      ) : (
        <SplitPara
          className={`description ${styles.description_body}`}
          delay={delay}
        >
          <p>{body}</p>
        </SplitPara>
      )}
    </>
  );
}
