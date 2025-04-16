import React from "react";
import styles from "./Toast.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, message }) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={styles.toast}
          initial={{
            opacity: 0,
            y: -20,
            x: "-50%",
            ease: [0.76, 0, 0.24, 1],
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: "-50%",
            ease: [0.76, 0, 0.24, 1],
          }}
          exit={{
            opacity: 0,
            y: -20,
            x: "-50%",
            ease: [0.76, 0, 0.24, 1],
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.icon}>
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
          </div>
          <div className={styles.text}>
            <p>{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
