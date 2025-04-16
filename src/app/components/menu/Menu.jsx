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
  {
    id: 1,
    sectionId: "section_services",
    label: "Services",
    link: "url",
    handle: "/icons/icon_service.png",
  },
  {
    id: 2,
    sectionId: "section_work",
    label: "Work",
    link: "url",
    handle: "/icons/icon_work.png",
  },
  {
    id: 3,
    sectionId: "section_resume",
    label: "Resume",
    link: "url",
    handle: "/icons/icon_resume.png",
  },
  {
    id: 4,
    sectionId: "section_about",
    label: "About",
    link: "url",
    handle: "/icons/icon_about.png",
  },
  {
    id: 5,
    sectionId: "section_contact",
    label: "Contacts",
    link: "url",
    handle: "/icons/icon_contact.png",
  },
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
          <div className={styles.header}>
            <div
              onMouseLeave={() => {
                setSelectedIndicator(pathname);
              }}
              className={styles.nav}
            >
              <Tag className={styles.tag} label={"[MENU]"} />
              <NavListItems navList={navList} />
            </div>
            <div className={styles.socials}>
              <Tag className={styles.tag} label={"[SOCIALS]"} />
              <div className={styles.links}>
                <a href="">
                  LinkedIn{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" fill="" />
                    <path
                      d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H6.66634M14.1663 5.83301V13.333"
                      stroke="#F5F2F0"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="">
                  Instagram{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" fill="" />
                    <path
                      d="M5.83301 14.1663L14.1663 5.83301M14.1663 5.83301H6.66634M14.1663 5.83301V13.333"
                      stroke="#F5F2F0"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div>
              <Tag className={styles.tag} label={"[EMAIL]"} />
              <MailTo mail={"thisiskai.bryant@gmail.com"} />
            </div>
            <div className={styles.copyright}>
              <Tag>All Rights</Tag>
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
