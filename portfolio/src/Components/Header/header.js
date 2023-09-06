import React from "react";
import "./header.scss";
import Spline from "@splinetool/react-spline";

import downArrow from "../Images/arrow-down.png"

function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <h2>Frontend</h2>
        <h2>Software</h2>
        <h2>Engineer</h2>
      </div>

      <div className="sphere">
        <Spline scene="https://prod.spline.design/OVftTRYnCNFUaJY9/scene.splinecode" />
      </div>

      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>

      <div className="header_more">
        <p>Scroll to find more</p>
        <img src={downArrow} alt="scroll for more" width="16px" height="16px"/>
      </div>
    </div>
  );
}

export default Header;
