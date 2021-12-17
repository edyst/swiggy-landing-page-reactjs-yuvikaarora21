import React from "react";
import "./SignUp.css";
import Button from "../UI/Button";
import IMG from "./login.webp";
import { useState } from "react";
const Login = (props) => {
  const [ref, setRef] = useState(false);
  let df = "#";

  const hid = (e) => {
    console.log(e);
    e.target.hidden = true;
    setRef(true);
  };
  return (
    <div className="login">
      <div className="backdrop" onClick={props.remove}></div>
      <div className="content">
        <div className="center">
          <i className="fas s fa-times" onClick={props.remove}></i>
          <div className="xd">
            <div>
              <div className="l">Sign up</div>
              <span className="or">or </span>
              <a className="create" href={df} onClick={props.login}>
                login to your account
              </a>
            </div>
            <img src={IMG} alt="" />
          </div>
          <div>
            <div className="inputLogin mt">
              <input className="loginInpu" id="signPhone" type="text" />
              <label className="contentLabel" for="signPhone">
                <span className="contentLogin">Phone number</span>
              </label>
            </div>
            <div className="inputLogin">
              <input className="loginInpu" id="signName" type="text" />
              <label className="contentLabel" for="signName">
                <span className="contentLogin">Name</span>
              </label>
            </div>
            <div className="inputLogin">
              <input className="loginInpu" id="signEmail" type="text" />
              <label className="contentLabel" for="signEmail">
                <span className="contentLogin">Email</span>
              </label>
            </div>
            <div className="inputLogin">
              <input className="loginInpu" id="signPass" type="text" />
              <label className="contentLabel" for="signPass">
                <span className="contentLogin">Password</span>
              </label>
            </div>
            <div style={{ marginTop: "20px" }}>
              <a href={df} className="refferal" onClick={hid}>
                Have a Refferal Code{" "}
              </a>
            </div>
            {ref && (
              <div style={{ marginTop: "-20px" }} className="inputLogin">
                <input className="loginInpu" id="signRefferal" type="text" />
                <label className="contentLabel" for="signRefferal">
                  <span className="contentLogin">Refferal</span>
                </label>
              </div>
            )}
          </div>
          <div className="slogs">
            <Button className="slog">Continue</Button>
          </div>
          <div className="policy">
            By creating an account, I accept the{" "}
            <a href={df}>Terms & Conditions</a> &{" "}
            <a href={df}>Privacy Policy</a>
          </div>
        </div>
      </div>
      {/* <div onClick={props.remove} className="login">
FIv Is OK!
</div> */}
    </div>
  );
};

export default Login;
