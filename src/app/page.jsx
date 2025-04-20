"use client";
import styles from "./page.module.scss";

import { useEffect, useState } from "react";

import { SmoothScrollProvider } from "@/utils/SmoothScroll";
import { ToastProvider } from "./store/ToastProvider";
import Loader from "./components/loader/Loader";
import Cursor from "./animation/Cursor/Cursor";
import Page from "./components/pages/home/page";

export default function Home() {
  const [isPageLoaded, setIsPageLoaded] = useState(null);
  useEffect(() => {
    // Hide Styles **
    document.body.style.opacity = "1";
    // Page loaded?
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <ToastProvider>
        <section>
          <div className={styles.texture}></div>
          <Loader />
          <Page />
        </section>
      </ToastProvider>
    </SmoothScrollProvider>
  );
}
