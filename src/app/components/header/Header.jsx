"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "../menu/MenuIcon";
import Menu from "../menu/Menu";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="overlay"
            onClick={() => setIsActive(!isActive)}
            style={{ cursor: "pointer", zIndex: 9 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.6,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <MenuIcon
        handleClick={() => setIsActive(!isActive)}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <AnimatePresence mode="wait">
        {isActive && <Menu isActive />}
      </AnimatePresence>
      {/* <Curve isActive={isActive} /> */}
    </header>
  );
}
