"use client";
import styles from "./About.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

import Image from "next/image";
import Title from "../title/Title";
import Description from "../description/Description";
import ImageMask from "@/app/animation/ImageMask/ImageMask";
import { useTheme } from "@/app/store/ThemeProvider";

// Data
import { _ABOUT } from "@/_data/_ABOUT";
const hero = _ABOUT.hero;
const tag = _ABOUT.subtitle.tag;
const body = _ABOUT.subtitle.body;
const handle = _ABOUT.image.handle;
const alt = _ABOUT.image.alt;

export default function About() {
  const titleRef = useRef(null);
  const { themeName } = useTheme();

  useEffect(() => {
    if (!titleRef.current) return;

    const el = titleRef.current;

    const instance = new SplitType(el, {
      types: "words",
      tagName: "span",
    });
    const split = new SplitType(instance.words, {
      types: "words",
      tagName: "span",
    });

    gsap.set(split.words, { y: 120 });

    gsap.to(split.words, {
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.025,
      delay: 0,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => split.revert();
  }, []);
  return (
    <section id="section_about" className={`section ${styles.section_about}`}>
      <div className="container grid-desktop">
        <h2 ref={titleRef} className={`${styles.title} ${styles[themeName]}`}>
          {hero}
        </h2>
      </div>
      <div className={`container grid-desktop ${styles.about_image}`}>
        <ImageMask className={styles.imageWrapper} start="top 60%">
          <Image
            src={`/images/about/${handle}${themeName}.png`}
            alt={alt}
            width="500"
            height="500"
          ></Image>
          <div className={styles.blur}></div>
        </ImageMask>
        <div className={styles.detailsWrapper}>
          <Description tag={tag} body={body} />
          <div className={styles.arrow}>
            {themeName === "neue" ? (
              <div className={styles.iconWrapper}>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.26221L12.9756 13.2378M12.9756 13.2378L12.9756 2.45977M12.9756 13.2378L2.19756 13.2378"
                    stroke="#21201E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div className={styles.iconWrapper}>
                <svg
                  width="101"
                  height="108"
                  viewBox="0 0 101 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_415_468)">
                    <path
                      d="M101.89 96.6949L91.7887 106.796L86.738 101.746L81.6872 106.796L76.6364 101.746L71.5857 106.796L66.5349 101.746L61.4841 106.796L56.4334 101.746L51.3826 106.796L46.3319 101.746L41.2811 106.796L36.2303 101.746L31.1796 106.796L21.0781 96.6949L31.1796 86.5933L36.2303 91.6441L41.2811 86.5933L46.3319 91.6441L51.3826 86.5933L56.4334 91.6441L61.4842 86.5933L66.5349 91.6441L71.5857 86.5933L0.875 15.8827L10.9765 5.78113L81.6872 76.4918L86.738 71.441L81.6872 66.3903L86.738 61.3395L81.6872 56.2888L86.738 51.238L81.6872 46.1872L86.738 41.1365L81.6872 36.0857L91.7887 25.9842L101.89 36.0857L96.8395 41.1365L101.89 46.1872L96.8395 51.238L101.89 56.2888L96.8395 61.3395L101.89 66.3903L96.8395 71.441L101.89 76.4918L96.8395 81.5426L101.89 86.5933L96.8395 91.6441L101.89 96.6949Z"
                      fill="#1C757D"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
