import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
