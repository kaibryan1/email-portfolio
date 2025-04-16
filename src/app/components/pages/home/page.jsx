"use client";
import styles from "./home.module.scss";

import { useEffect } from "react";
import { useTheme } from "@/app/store/ThemeProvider";

// Components
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import HeroNeue from "../../hero/HeroNeue";
import HeroPixel from "../../hero/HeroPixel";
import Services from "../../services/Services";
import Projects from "../../projects/Projects";
import Experience from "../../experience/Experience";
import About from "../../about/About";
import Footer from "../../footer/Footer";
import MaskedFooter from "../../footer/MaskedFooter";

export default function page() {
  const { themeName, isChangingTheme } = useTheme();

  return (
    <>
      <main className={styles.page}>
        <Header />
        {!isChangingTheme && (
          <>
            {themeName === "neue" ? <HeroNeue /> : <HeroPixel />}
            {/* rest of your page content */}
          </>
        )}
        <Services />
        <Projects />
        <Experience />
        <About />
        <Footer />
      </main>
      <MaskedFooter />
      <div className={styles.footer_spacer}></div>
    </>
  );
}
