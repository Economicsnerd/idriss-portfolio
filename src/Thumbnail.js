import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Thumbnail = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="project screenshot" />
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  );
};

export default Thumbnail;
