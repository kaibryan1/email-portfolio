export const switchSlide = {
  initial: (index) => ({
    y: "120%",
    scale: Math.max(1 - index * 0.1, 0.5),
  }),
  enter: {
    y: "0",
    scale: 1,
    transition: { duration: 1.3, ease: [0.19, 1, 0.22, 1] },
  },
  exit: (index) => ({
    y: "120%",
    scale: Math.max(1 - index * 0.1, 0.5),
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
  }),
};

export const scaleLabel = {
  initial: { width: 0 },
  enter: {
    width: "88px",
    transition: { duration: 1.3, ease: [0.28, 0.79, 0.39, 0.99] },
  },
  exit: {
    width: 0,
    transition: { duration: 0.9, ease: [0.28, 0.79, 0.39, 0.99] },
  },
};
