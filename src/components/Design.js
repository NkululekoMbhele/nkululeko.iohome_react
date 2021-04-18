import React from "react";
import DesignItem from "./DesignItem";

function Design() {
  return (
    <>
      <div className="projects__container">
        <h1 className="projectSectionTitle">Design</h1>
        <div className="projects__wrapper">
          <ul className="projects__items">
            <DesignItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Logo Design"
              path="/services"
            />
            <DesignItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Photography"
              path="/products"
            />
            <DesignItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Logo Design"
              path="/sign-up"
            />
          </ul>
          <ul className="projects__items">
            <DesignItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Logo Design"
              path="/sign-up"
            />
            <DesignItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Logo Design"
              path="/sign-up"
            />
            <DesignItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Logo Design"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Design;
