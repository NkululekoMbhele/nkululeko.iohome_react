import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div>
      <div className="title">
        <h1 className={props.titleColor}>{props.title}</h1>
      </div>
    </div>
  );
};

export default Title;
