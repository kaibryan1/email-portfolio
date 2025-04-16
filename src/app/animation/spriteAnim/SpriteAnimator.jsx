import React from "react";
import styles from "./SpriteAnimator.module.scss";

const SpriteAnimator = ({
  src,
  frameWidth = 256,
  frameHeight = 256,
  totalFrames = 4,
  fps = 8,
  scale = 1,
  className = "",
}) => {
  const animationDuration = `${(totalFrames / fps).toFixed(2)}s`;

  return (
    <div
      className={styles.spriteWrapper}
      style={{ transform: `scale(${scale})` }}
    >
      <div
        className={`${styles.sprite} ${className}`}
        style={{
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${frameWidth * totalFrames}px ${frameHeight}px`, // ← DO NOT SCALE THIS
          animationDuration,
        }}
      />
    </div>
  );
};

export default SpriteAnimator;
