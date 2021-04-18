import React from "react";
import "./Projects.css";
import CodeItem from "./CodeItem";

function CodeProjects() {
  return (
    <>
      <div className="projects__container">
        <h1 className="projectSectionTitle">Code</h1>
        <div className="projects__wrapper">
          <ul className="projects__items">
            <CodeItem
              src="images/img-3.jpg"
              text="Motohive website (fake company) I designed and develop a simple landing page of this company."
              site="/"
              site="/"
              label="HTML-CSS-JAVASCRIPT"
              path="/services"
            />
            <CodeItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CodeItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default CodeProjects;
