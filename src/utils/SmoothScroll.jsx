"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context for Lenis
const LenisContext = createContext(null);

export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      duration: 0.6,
      lerp: 0.7,
    });

    setLenis(lenisInstance);

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

// Custom hook to use Lenis
export function useLenis() {
  return useContext(LenisContext);
}
