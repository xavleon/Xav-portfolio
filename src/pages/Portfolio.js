import React from "react";
import Nav from "../components/Navbar/Nav.js";
import Hero from "../components/Hero/Hero.js";
import About from "../components/About/About.js";
import Skills from "../components/Skills/Skills.js";
import Projects from "../components/Projects/Project.js";

const Portfolio = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Portfolio;
