import React from "react";
import "./FeaturesList.css"
const FeaturesList = (props) => {
  return (
    <div className="flist">
      <img className="img" src={props.src} alt="" />
      <div className="title">{props.title}</div>
      <div className="msg">{props.msg}</div>
    </div>
  );
};

export default FeaturesList;
