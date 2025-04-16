import styles from "./NavListItems.module.scss";
import { useState } from "react";
import NavItem from "../navItem/NavItem"; //Navitem

export default function NavListItems({ navList }) {
  const [isActive, setIsActive] = useState(null);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseY(event.clientY);
  };

  return (
    <ul className={`navList ${styles.navListItems}`}>
      {navList.map((item) => {
        return (
          <NavItem
            setIsActive={setIsActive}
            isActive={isActive === item.id}
            data={item}
            key={item.label}
          />
        );
      })}
    </ul>
  );
}
