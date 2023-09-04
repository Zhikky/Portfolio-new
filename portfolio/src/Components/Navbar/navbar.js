import React, { useState } from "react";
import "./navbar.scss";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  //   const toggleHamburgerMenu = () => {
  //     if (isOpen == true ){

  //     }
  //   };

  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <h2>EA</h2>
      </div>

      <div id="hamburger-menu">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
          id="hamburger-menu"
        />
      </div>

      <div className={`navbar_links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
          <li>
            <a href="/Skills/">Skills</a>
          </li>
          <li>
            <a href="/Projects/">Projects</a>
          </li>
          <li>
            <a href="/Contact/">Contact</a>
          </li>
        </ul>
        <div>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
