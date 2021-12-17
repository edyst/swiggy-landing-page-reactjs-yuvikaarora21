import React from "react";
import IOS from "./iOS.webp";
import play from "./play.webp";
import "./Play.css";
const Play = (props) => {
  let classes = props.class + " play";
  let url = "";
  return (
    <div className="playss">
      <a href={url}>
        <img className={classes} src={play} alt="" />
      </a>
      <a href={url}>
        <img className={classes} src={IOS} alt="" />
      </a>
    </div>
  );
};

export default Play;
