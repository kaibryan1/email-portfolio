"use client";

import { useState, useEffect } from "react";

// Custom hook to get the window size
export default function useWindowWidth() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Update the window size when the resize event triggers
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();

      // Add the event listener when the component mounts
      window.addEventListener("resize", handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run once on mount

  return windowSize;
}
