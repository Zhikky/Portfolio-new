import React from "react";
import "./projects.scss";

import Hernalytics from "../Images/Hernalytics.png";
import Lendsqr from "../Images/Lendsqr.png";
import Scissor from "../Images/Scissor.png";
import Right from "../Images/right.png";

function Projects() {
  const details = [
    {
      name: "Hernalytics clone",
      description:
        "The Hernalytics project is an election dashboard that helps to display real-time results of ongoing elections to create the feeling of a free election.",
      stacks: [
        "HTML",
        "CSS",
        "SASS",
        "React",
        "Javascript",
        "Firebase",
        "Figma",
      ],
      image: Hernalytics,
      link: "https://hernalytic1.web.app/",
    },
    {
      name: "LendsQr",
      description:
        "LendsQr is a dynamic project showcasing proficiency in React, haven masterfully handled API requests and adeptly managed data. It provides an intuitive platform for managing loan artisans and customers, offering a seamless experience in data management and interaction.",
      stacks: ["HTML", "CSS", "React", "Javascript", "Firebase", "Figma"],
      image: Lendsqr,
      link: "https://ezekiel-lendsqr-fe-test.web.app/userpage",
    },
    {
      name: "Scissor",
      description:
        "Scissor represents the convergence of React and TypeScript, elevating link management to new heights. This web application excels in custom link generation, efficient link shortening, and even QR code creation. It adheres to the highest standards of markdown practices, making it a versatile and robust tool for digital link management.",
      stacks: [
        "HTML",
        "CSS",
        "SASS",
        "React",
        "Javascript",
        "Typescript",
        "Firebase",
        "Figma",
      ],
      image: Scissor,
      link: "https://ezekiel-lendsqr-fe-test.web.app/userpage",
    },
  ];

  return (
    <div className="projects_container">
      <h2 data-aos="fade-down">Projects</h2>

      <p>Check out some noteworthy projects...</p>

      <div className="projects">
        {details.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div>
                {/* <a href={project.link} target="_blank" rel="noreferrer"> */}
                <img src={project.image} alt="" />
                {/* </a> */}
                <div className="overlay"></div>
              </div>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stacks_button">
                  {project.stacks.map((stack, number) => (
                    <button key={number}>{stack}</button>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer">
                  Have a look <img src={Right} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
