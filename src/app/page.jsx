"use client";

import Image from "next/image";

import ThemeSwitcher from "./components/ThemeSwitcher";
import { SmoothScrollProvider } from "@/utils/SmoothScroll";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <section>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <About />
        <Footer />
      </section>
    </SmoothScrollProvider>
  );
}
