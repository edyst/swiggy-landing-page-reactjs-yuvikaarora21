import React from "react";
import "./DynamicText.css";
// import { useState, useEffect } from "react";
const DynamicText = () => {
  // const [text, setText] = useState("Unexpected guests?");
  // const [count, setCount] = useState(0);
  // if (count === 5) {
  //   setCount(0);
  // }
  // useEffect(() => {
  //   const a = ["Cooking gone wrong?", "Hungry?", "Game Night?","Movie marathon?","Unexpected guests?"];
  //   const interval = setInterval(() => {
  //     setText(a[count]);
  //     console.log(count);
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     document.getElementById("animate").classList.add("ani-bot");
  //   }, 0);
  //   document.getElementById("animate").classList.remove("ani-bot");
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count + 1);
  //     console.log(count);
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <div id="sa" className="dt">
      <h1 id="animate" className="sss">
        <span className="new-heading"></span>
      </h1>
      <h2>Order food from favourite restaurants near you.</h2>
    </div>
  );
};

export default DynamicText;
