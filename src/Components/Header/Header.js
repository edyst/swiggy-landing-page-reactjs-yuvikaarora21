import React from "react";
import Swiggy from "./Swiggy-logo.png";
import "./Header.css";
import Dinner from "./Dinner.webp";
import Button from "../UI/Button";
import DynamicText from "./DynamicText";
import Input from "./Input";
import PopCity from "./PopCity";
import Login from "../Overlays/Login";
import { useState } from "react";
import SignUp from "../Overlays/SignUp";
// import { Transition } from 'react-transition-group';
const Header = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const loginHandler = () => {
    document.body.classList.add("hidden");
    setLogin(true);
  };
  const logHandler = () => {
    setLogin(true);
    setSignUp(false);
  };
  const signHandler = () => {
    setLogin(false);
    setSignUp(true);
  };
  const signUpHandler = () => {
    document.body.classList.add("hidden");
    setSignUp(true);
  };
  const clears = () => {
    document.body.classList.remove("hidden");

    console.log("object2");
    setLogin(false);
    setSignUp(false);
  };
  return (
    <div>
      {login && (
        <>
          <Login signin={signHandler} remove={clears} />
        </>
      )}
      {signUp && <SignUp login={logHandler} remove={clears} />}
      <div className="header">
        <div className="col">
          <div className="row">
            <img src={Swiggy} alt="" className="logo" />
            <div className="btnContainer">
              <Button className="log" onClick={loginHandler}>
                Login
              </Button>
              <Button className="sign" onClick={signUpHandler}>
                Sign Up
              </Button>
            </div>
          </div>
          <DynamicText />
          <Input />
          <PopCity />
        </div>

        <div className="imgContainer">
          <img src={Dinner} alt="" className="dinner" />
        </div>
      </div>
    </div>
  );
};

export default Header;
