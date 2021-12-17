import React from "react";
import Play from "../../UI/Play";
import "./ReasturantSection.css";
import Android from "./pixel.webp";
import iPhone from "./iPhone.webp";
const ReasturantSection = () => {
  return (
    <div className="rs">
      <div className="rest">
        <div className="in">
          <div className="pocket">Restaurants in your pocket</div>
          <div className="order">
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </div>
          <Play />
        </div>
        <div className="out">
            <img src={Android} className="and resp"  alt="" />
            <img src={iPhone} className="ip resp"  alt="" /> 
        </div>
      </div>
    </div>
  );
};

export default ReasturantSection;
