import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer_container">
      <div>
        <h3>Ezekiel Adetuwo</h3>
        <p>ezeadetuwo@gmail.com</p>
      </div>
      <div className="footer_links">
        <div>
          <p>links</p>
          <ul>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Skills</li>
            </a>
            <a href="">
              <li>Projects</li>
            </a>
          </ul>
        </div>
        <div>
          <p>links</p>
          <ul>
            <a href="">
              <li>Instagram</li>
            </a>
            <a href="">
              <li>Twitter</li>
            </a>
            <a href="">
              <li>LinkedIn</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
