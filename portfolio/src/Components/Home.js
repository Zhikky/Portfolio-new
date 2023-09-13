import React from "react";
import "./Home.scss";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";
import Body from "./Body/body";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Header />

      <Body />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default Home;
