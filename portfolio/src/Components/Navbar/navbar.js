/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.scss";
import { Spin as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const documentUrl = "../Images/Ezekiel_Adetuwo_CV.pdf";

  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <h2>EA</h2>
      </div>

      <div id="hamburger-menu">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.6}
          size={24}
          color="#ffffff"
          id="hamburger-menu"
        />
      </div>

      <div className={`navbar_links ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                const about = document.getElementById("about");
                about.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                const about = document.getElementById("skills");
                about.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                const about = document.getElementById("projects");
                about.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                const about = document.getElementById("contact");
                about.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a href={documentUrl} download="Ezekiel_Adetuwo_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
