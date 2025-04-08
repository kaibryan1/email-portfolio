"use client";

import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./MenuAnim";
import Tag from "../tag/Tag";
import NavListItems from "../navListItems/NavListItems";
import Curve from "../curve/Curve";
import MailTo from "../mailTo/MailTo";

const navList = [
  { id: 1, label: "Work", link: "url" },
  { id: 2, label: "Contacts", link: "url" },
  { id: 3, label: "About", link: "url" },
  { id: 4, label: "Resume", link: "url" },
  { id: 5, label: "LinkedIn", link: "url" },
  { id: 6, label: "Instagram", link: "url" },
];

export default function Menu({ isActive }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
            <Tag className={styles.tag} label={"[MENU]"} />
            <NavListItems navList={navList} />
          </div>

          <div className={styles.footer}>
            <div>
              <Tag className={styles.tag} label={"[EMAIL]"} />
              <MailTo mail={"thisiskai.bryant@gmail.com"} />
            </div>
            <div className={styles.copyright}>
              <Tag>Copyright</Tag>
              <Tag>Reserved @Kai</Tag>
              <Tag>[2025]</Tag>
            </div>
          </div>
        </div>
        <Curve isActive={isActive} />
      </motion.div>
    </>
  );
}
