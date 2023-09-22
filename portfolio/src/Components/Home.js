import React, { useState, useEffect } from "react";
import "./Home.scss";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";
import Body from "./Body/body";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

import Loader from "./Loader/loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Detect when all assets are loaded
  //   window.onload = () => {
  //     setIsLoading(false); // Set loading to false when all assets are loaded
  //   };
  // }, []);

  useEffect(() => {
    // Simulate loading time (replace with actual loading logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when content is loaded
    }, 8000); // Replace with your desired loading duration in milliseconds
  }, []);

  return (
    <div className="home">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <Header />

          <Body />

          <Skills />

          <Projects />

          <Contact />

          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
