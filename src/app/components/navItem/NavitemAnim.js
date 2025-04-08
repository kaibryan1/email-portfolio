import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const navSlide = {
  initial: { y: 100 },
  enter: (i) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    y: 100,
    transition: { duration: 0, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const revealMask = {
  initial: { clipPath: "inset(0% 100% 0% 0%)" },
  enter: (i) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    clipPath: "inset(100% 0% 0% 0%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const revealText = ({ ref, id }) => {
  gsap.fromTo(
    ref,
    { yPercent: 300 },
    {
      yPercent: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.05 * id,
    }
  );
};
