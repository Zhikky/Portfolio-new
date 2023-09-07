import React from "react";
import "./body.scss";
import Plx from "react-plx";
import Zhikky from "../Images/zhikky.png"

const parallaxData = [
  {
    start: "self",
    end: 500,
    properties: [
      {
        startValue: -50,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];

function Body() {
  return (
    <div className="body_container" id="about">
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
        <h2>About Me</h2>
      </Plx>

      <div className="about_content">
        <div className="about_icon">
          <div className="icon_container">
            <img
              className="icon_image"
              src={Zhikky}
            // src="#"
              alt="logo"
            />
          </div>
        </div>

        <div className="about_text">
          <p>
            I am an innovative <span>Software Engineer</span> that specializes
            in creating interesting and distinctive front end systems using
            modern frameworks and technologies. With expertise spanning
            React.js, Vue.js, CSS preprocessors like SASS, and other
            technologies, I transform ideas into immersive digital experiences.
          </p>
          <p>
            Constantly fueling my passion for growth, I thrive on challenges
            that push the boundaries of my expertise. With over <span>two years</span> of
            diverse experience, from freelancing to thriving in more corporate
            environments, I've honed my skills and sculpted my creativity. I am
            not just a programmer, I am a creator, with codes as my tools. Let's
            build something extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
