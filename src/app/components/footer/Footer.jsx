import React, { useRef } from "react";
import styles from "./Footer.module.scss";
import Title from "../title/Title";
import Tag from "../tag/Tag";
import NavListItems from "../navListItems/NavListItems";
import MailTo from "../mailTo/MailTo";
import { useTheme } from "@/app/store/ThemeProvider";

// Data
import { _FOOTER } from "@/_data/_FOOTER";
const firstLine = _FOOTER.title.firstLine;
const secondLine = _FOOTER.title.secondLine;
const navTag = _FOOTER.subtitle.nav.tag;
const navList = _FOOTER.navList;
const emailTag = _FOOTER.email.tag;
const emailBody = _FOOTER.email.body;

export default function Footer() {
  const { themeName, mode, updateTheme } = useTheme();
  const navItemRef = useRef(null);
  return (
    <section
      id="section_contact"
      className={`section ${styles.section_footer}`}
    >
      <div className={styles.section_wrapper}>
        <div className={`container grid-desktop ${styles.footer_title}`}>
          <Title firstLine={firstLine} secondLine={secondLine} />
        </div>
        <div className={`container grid-desktop ${styles.footer_nav}`}>
          <div className={styles.tag}>
            <Tag label={navTag} />
          </div>
          <div ref={navItemRef} className={styles.navList}>
            <NavListItems navList={navList} />
          </div>
        </div>
        <div className={`container grid-desktop ${styles.footer_email}`}>
          <div className={styles.tag}>
            <Tag label={emailTag} />
          </div>
          {/* <h3>{emailBody}</h3> */}
          <div className={styles.mailWrapper}>
            <MailTo mail={emailBody} />
          </div>
        </div>
      </div>
    </section>
  );
}
