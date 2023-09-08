import React from "react";
import "./skills.scss";

function Skills() {
  return (
    <div className="skills_container">
      <h2 data-aos="fade-down">Skills</h2>

      <p>Here are some of my tech stacks....</p>

      <div className="stacks_container">
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <i class="fa-solid fa-x"></i>
          <div></div>
        </div>

        <div className="stacks">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-vuejs"></i>
          <i class="fa-brands fa-react"></i>
          <span>Ts</span>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-git-alt"></i>
          <i class="fa-brands fa-sass"></i>
          <i class="fa-brands fa-figma"></i>
          
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <i class="fa-solid fa-x"></i>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
