import React from "react";
import Button from "../UI/Button";
import "./Input.css";
const Input = () => {
  return (
    <div className="input">
      <input className="city" type="text" placeholder="Enter Your Delivery Location" />
      <Button className="btn1">
        <i className="fas fa-crosshairs"></i> Locate Me
      </Button>
      <Button className="btn2">Find Food</Button>
    </div>
  );
};

export default Input;
