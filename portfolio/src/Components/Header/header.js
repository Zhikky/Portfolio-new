import React from "react";
import "./header.scss";
import Spline from "@splinetool/react-spline";

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

      <div id="loader_header">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    </div>
  );
}

export default Header;
