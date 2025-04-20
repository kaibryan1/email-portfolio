"use client";
import styles from "./home.module.scss";

import { useEffect } from "react";
import { useTheme } from "@/app/store/ThemeProvider";

// Next js
import Head from "next/head";

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
      <Head>
        <link rel="preload" as="image" href="/images/about/kai_neue.png" />
        <link rel="preload" as="image" href="/images/projects/cover_1.jpg" />
        <link rel="preload" as="image" href="/images/projects/cover_2.jpg" />
        <link
          rel="preload"
          as="image"
          href="/images/projects/project_neue.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/images/projects/project_synergy.jpg"
        />
      </Head>
      <main className={styles.page}>
        <Header />
        {!isChangingTheme && (
          <>{themeName === "neue" ? <HeroNeue /> : <HeroPixel />}</>
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
