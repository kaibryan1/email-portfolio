import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Tag from "../tag/Tag"; //Tag compo
import SplitHeadings from "@/app/animation/split/SplitHeadings";

export default function ProjectCard({ data, index }) {
  const { title, year, type, roles, coverImage, projectImage } = data;
  const imageRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  //Use motion value to calc opacity
  const opacity = useMotionValue(0);
  // Derive the scale to the opacity, proxy animation
  const scale = useSpring(opacity, {
    stiffness: 500, //More Gravity
    damping: 20,
  });

  // Container ref
  const containerRef = useRef(null);
  const ctaSize = 100;

  //   Config mouse x and y pos
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 35, stiffness: 350, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  //   Handle mouse move
  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    // Get the bounding box area
    const x = e.clientX - bounds.left - ctaSize / 2;
    const y = e.clientY - bounds.top - ctaSize / 2;
    // Set the cursor position relative to the bounding box
    mouse.x.set(x);
    mouse.y.set(y);
  };

  // Mouse Enter
  const handleMouseEnter = () => {
    setIsHovered(true);
    opacity.set(1);
  };

  // Mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    opacity.set(0);
  };

  // Animation
  useEffect(() => {
    //   Initialize mouse position on component mounts
    const container = containerRef.current;
    if (!container && !imageRef.current) return;

    // Initial position
    const bounds = container.getBoundingClientRect();
    const centerX = bounds.width / 2 - ctaSize / 2;
    const centerY = bounds.height / 2 - ctaSize; //Becase top is default
    mouse.x.set(centerX);
    mouse.y.set(centerY);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Parallex Image Animation
    imageRef.current.forEach((image, index) => {
      gsap.to(image, {
        yPercent: 15,
        scrollTrigger: {
          trigger: image,
          start: "top 50%",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.card} ref={containerRef}>
      <div className={styles.card_imageContainer}>
        <div className={styles.projectImage}>
          <img
            src={`/images/projects/${projectImage}`}
            alt="Project Cover Image Showing Preview"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <Image
          className={styles.coverImage}
          ref={(el) => (imageRef.current[index] = el)}
          src={`/images/projects/${coverImage}`}
          alt="projectCoverImage"
          width={1000}
          height={1000}
          loading="lazy"
        ></Image>
        {/* Hover Action */}
        <div className={styles.cta_container}>
          <motion.div
            className={styles.cta}
            style={{
              left: smoothMouse.x,
              top: smoothMouse.y,
              opacity,
              scale,
            }}
          >
            <span>
              <p>View</p>
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
            </span>
          </motion.div>
        </div>
      </div>
      <div className={styles.card_details}>
        <SplitHeadings start="top 95%" className={styles.card_details_first}>
          <h3>{title}</h3>
          <Tag type="outline" label={year} />
        </SplitHeadings>
        <div className={styles.card_details_second}>
          <Tag type="normal" label={type} />
          <span className="flex-row-center flex-wrap gap-sm">
            {roles.map((role, index) => (
              <Tag key={index} type="outline" label={role} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
