import React from "react";
import "./Projects.css";
import Code from "./CodeProjects";
import Design from "./Design";
import Title from "./Title";

function Projects() {
  const title = "My Work";
  const titleColor = "blackTitle";
  return (
    <div className="projects">
      <Title titleColor={titleColor} title={title} />
      <Code />
      <Design />
    </div>
  );
}

export default Projects;
