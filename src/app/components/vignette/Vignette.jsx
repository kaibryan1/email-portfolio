"use client";

import styles from "./Vignette.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Vignette({ handle }) {
  return (
    <div className={`gallery ${styles.gallery}`}>
      <div className={styles.vignetteWrapper}>
        <div className={`vignette ${styles.vignette}`}>
          <Image
            src={`/images/experiences/${handle}`}
            alt="image"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
    </div>
  );
}
