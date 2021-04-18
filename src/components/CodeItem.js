import React from "react";
import { Link } from "react-router-dom";

function CodeItem(props) {
  return (
    <>
      <li className="projects__item">
        <div className="projects__item__link">
          <Link className="" to={props.path}>
            <figure
              className="projects__item__pic-wrap"
              data-category={props.label}
            >
              <img
                className="projects__item__img"
                alt="TravelImage"
                src={props.src}
              />
            </figure>
          </Link>
          <div className="projects__item__info">
            <h5 className="projects__item__text">{props.text}</h5>
            <div className="projects-links">
              <Link className="link" to="/">
                Site
              </Link>
              <Link className="link" to="/">
                Code
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CodeItem;
