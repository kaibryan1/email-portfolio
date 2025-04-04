import styles from "./MailTo.module.scss";
import { motion } from "framer-motion";

export default function MailTo({ mail }) {
  return (
    <motion.div className={styles.mail} whileHover="hover" initial="initial">
      <h3>{mail}</h3>
      <motion.span
        className={styles.flicker}
        variants={{
          initial: {
            x: "-120%",
          },
          hover: {
            x: "500%",
            transition: {
              duration: 1.2,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.4,
            },
          },
        }}
      ></motion.span>
    </motion.div>
  );
}
