import React from "react";
import styles from "./Description.module.scss";
import Tag from "../tag/Tag"; //Tag Compo

export default function Description({ tag, body }) {
  return (
    <>
      <div className={`tag ${styles.description_tag}`}>
        <Tag label={tag} type="normal" />
      </div>
      {Array.isArray(body) ? (
        <div
          className={`description ${styles.description_body} ${styles.description_array}`}
        >
          {body.map((para, i) => {
            return (
              <p key={i} className={`description ${styles.description_body}`}>
                {para}
              </p>
            );
          })}
          <br />
        </div>
      ) : (
        <p className={`description ${styles.description_body}`}>{body}</p>
      )}
    </>
  );
}
