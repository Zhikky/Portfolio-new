import React from "react";
import "./Home.scss";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Header />
    </div>
  );
}

export default Home;
