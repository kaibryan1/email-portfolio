import React from "react";
import styles from "./NavListPixel.module.scss";
import NavItemPixel from "../navItem/NavItemPixel";

const handleClick = () => {
  const navList = document.querySelector(".navList");
  navList.classList.toggle("visible");
};

export default function NavListPixel({ navList }) {
  return (
    <div className={styles.navList_wrapper}>
      <div className={styles.nav_menu} onClick={handleClick}>
        <NavItemPixel handle={"/icons/icon_menu.png"} />
      </div>
      <ul className={`navList ${styles.navListItems}`}>
        {navList.map((item) => {
          return (
            <NavItemPixel
              id={item.id}
              label={item.label}
              key={item.label}
              handle={item.handle}
            />
          );
        })}
      </ul>
    </div>
  );
}
