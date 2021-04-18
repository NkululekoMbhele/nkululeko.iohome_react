import React from "react";
import "../../App.css";
import Projects from "../Projects";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Contact from "../Contact";
import Skills from "../Skills";

function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
