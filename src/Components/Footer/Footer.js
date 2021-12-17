import React from "react";
import Play from "../UI/Play";
import "./Footer.css";
import List1 from "./List1";
import List2 from "./List2";
import List3 from "./List3";
import List4 from "./List4";
import Swiggy from "./Logo.webp";
const Footer = () => {
  let ccc = "#";
  return (
    <div className="foot">
      <div className="footContainer">
        <div className="foot2">
          <div className="fddf">
            <div className="head">COMPANY</div>
            <ul className="uList">
              <a href={ccc}>
                <li>About us</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Team</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Careers</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Swiggy Blog</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Bug Bounty</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Swiggy Super</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Swiggy Corporate</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Swiggy Instamart</li>
              </a>
            </ul>
          </div>
          <div className="fddf">
            <div className="head">CONTACT</div>
            <ul className="uList">
              <a href={ccc}>
                <li> Help & Support</li>
              </a>
              <a href={ccc}>
                {" "}
                <li> Partner with us</li>
              </a>
              <a href={ccc}>
                {" "}
                <li> Ride with us</li>
              </a>
            </ul>
          </div>
          <div className="fddf">
            <div className="head">Legal</div>
            <ul className="uList">
              <a href={ccc}>
                <li>Terms & Conditions</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Refund & Cancellation</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Privacy Policy</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Cookie Policy</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Offer Terms</li>
              </a>
              <a href={ccc}>
                {" "}
                <li>Phishing & Fraud</li>
              </a>
            </ul>
          </div>
          <div className="fddf">
            <Play class="pflex" />
          </div>
        </div>
        <div className="foot3">
          <div className="head" style={{ marginTop: "4%" }}>
            WE DELIVER TO
          </div>
          <div className="foot2">
            <List1 className="fddf" />
            <List2 className="fddf" />
            <List3 className="fddf" />
            <List4 className="fddf" />
          </div>
        </div>
        <div style={{ marginTop: "2%", border: "0" }} className="foot2">
          <div>
            <img
              style={{ width: "142px", height: "42px" }}
              src={Swiggy}
              alt=" "
            />
          </div>
          <div className="fddf" style={{ fontSize: "24px" }}>
            © 2021 Swiggy
          </div>
          <div className="fddf" style={{ width: "15%" }}>
            <i className="fab fa-facebook-f"> </i>
            <i className="fab fa-pinterest-p"> </i>
            <i className="fab fa-instagram"> </i>
            <i className="fab fa-twitter"> </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
