import React from "react";
import FeaturesList from "./FeaturesList";
import Feat1 from "./Feat1.webp";
import Feat2 from "./Feat2.webp";
import Feat3 from "./Feat3.webp";
import "./Features.css";
const Features = () => {
  return (
    <div className="features">
      <div className="fllist">
      <FeaturesList
        src={Feat1}
        title={"No Minimum Order"}
        msg={
          "Order in for yourself or for the group, with no restrictions on order value"
        }
      />
      <FeaturesList
        src={Feat2}
        title={"Live Order Tracking"}
        msg={
          "Know where your order is at all times, from the restaurant to your doorstep"
        }
      />
      <FeaturesList
        src={Feat3}
        title={"Lightning-Fast Delivery"}
        msg={
          "Experience Swiggy's superfast delivery for food delivered fresh & on time"
        }
      />
      </div>
    </div>
  );
};

export default Features;
