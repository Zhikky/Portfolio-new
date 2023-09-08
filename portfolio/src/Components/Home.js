import React from "react";
import "./Home.scss";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";
import Body from "./Body/body";
import Skills from "./Skills/skills";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Header />

      <Body />

      <Skills />
    </div>
  );
}

export default Home;
