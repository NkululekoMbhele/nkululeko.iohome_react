import React from "react";
import Title from "./Title";
import Skill from "./Skill";
import "./Skills.css";

function Skills() {
  const title = "Skills";
  const titleColor = "whiteColor";
  return (
    <div className="skills">
      <Title titleColor={titleColor} title={title} />
      <div className="skills-container">
        <div className="skills-wrapper">
          <ul className="skillItem">
            <Skill text="HTML5/CSS3" src="images/rate5.svg" />
            <Skill text="JavaScripts" src="images/rate4.svg" />
            <Skill text="SQL" src="images/rate4.svg" />
            <Skill text="Reactjs" src="images/rate3.svg" />
            <Skill text="Java" src="images/rate4.svg" />
            <Skill text="Python" src="images/rate4.svg" />
            <Skill text="C++" src="images/rate2.svg" />
          </ul>
          <ul className="skillItem">
            <Skill text="Web Design" src="images/rate4.svg" />
            <Skill text="UI/UX Design" src="images/rate3.svg" />
            <Skill text="Adobe Software Suite" src="images/rate4.svg" />
            <Skill text="Communication" src="images/rate4.svg" />
            <Skill text="Strategic Thinking" src="images/rate5.svg" />
            <Skill text="Computer Networks" src="images/rate3.svg" />
            <Skill text="Photography" src="images/rate4.svg" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
