import React from "react";

function Skill(props) {
  return (
    <>
      <li className="skill">
        <div className="skill-container">
          <h5 className="skill-name">{props.text}</h5>
          <img className="skill-proficiency" src={props.src} alt={props.src} />
        </div>
      </li>
    </>
  );
}

export default Skill;
