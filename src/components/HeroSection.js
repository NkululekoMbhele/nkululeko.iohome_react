import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hi">Hi</h1>
      <h1 className="my-name">
        {" "}
        <span>I'm</span> Nkululeko Mbhele
      </h1>
      <p>Self-taught Graphic Designer and Web Developer</p>
      <p>Final Year Computer Science Student</p>
      <div className="hero-btns">
        <Button
          link="/Projects"
          type="btn--outline"
          size="btn--large"
          text="MY WORK"
        />
        <Button
          link="ContactPage"
          type="btn--primary"
          size="btn--large"
          text="CONTACT"
        />
      </div>
    </div>
  );
}

export default HeroSection;
