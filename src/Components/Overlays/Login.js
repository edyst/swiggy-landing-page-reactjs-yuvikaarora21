import React from "react";
import "./Login.css";
import Button from "../UI/Button";
import IMG from "./login.webp";
const Login = (props) => {
  let df = "#";
  return (
    <div className="login lsls">
      <div className="backdrop" onClick={props.remove}></div>
      <div className="content">
        <div className="center">
          <i className="fas s fa-times" onClick={props.remove}></i>
          <div className="xd">
            <div>
              <div className="l">Login</div>
              <span className="or">or </span>
              <a className="create" href={df} onClick={props.signin}>
                create an account
              </a>
            </div>
            <img src={IMG} alt="" />
          </div>
          <div className="inputLogin mt">
            <input className="loginInpu" id="loginInput" type="text" />
            <label className="contentLabel" for="loginInput">
              <span className="contentLogin">Phone number</span>
            </label>
          </div>
          <div className="slogs">
            <Button className="slog">Log in</Button>
          </div>
          <div className="policy">
            By clicking on Login, I accept the{" "}
            <a href={df}>Terms & Conditions</a> &{" "}
            <a href={df}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
