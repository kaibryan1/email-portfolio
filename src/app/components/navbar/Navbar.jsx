import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavListItems from "../navListItems/NavListItems";
import TimeCode from "../timecode/TimeCode";

// Data
import { _NAVBAR } from "@/_data/_NAVBAR";
const navList = _NAVBAR.navList;
const logo_pixel = _NAVBAR.logo.pixel.handle;
const logo_neue = _NAVBAR.logo.neue.handle;

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isVisible ? styles.visible : ""} section`}
    >
      <div className={`container grid-desktop`}>
        <div className={styles.logo}>
          <Image
            src={`/images/logo/${logo_pixel}.png`}
            width={500}
            height={500}
            alt="Logo Profile Picture"
          ></Image>
        </div>
        <div className={styles.timeWrapper}>
          <TimeCode />
        </div>
        <div className={styles.navListWrapper}>
          <NavListItems navList={navList} />
        </div>
      </div>
    </nav>
  );
}
