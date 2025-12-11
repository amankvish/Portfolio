"use client";

import Hero from "./home/Hero";
import Skills from "./home/Skills";
import Projects from "./home/Projects";
import Contact from "./home/Contact";
import About from "./home/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
