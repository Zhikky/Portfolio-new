import React from "react";
import { useNavigate } from "react-router-dom";
import "./404.scss";

function PageNotFound() {
  //useNavigate hook
  const navigate = useNavigate();

  //navigate to Login page
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="error-container">
      <section className="error">
        <h1>404</h1>
        <p>PageNotFound</p>
        <button onClick={handleNavigate} className="return-home-button">
          Return to Home Page
        </button>
      </section>
    </div>
  );
}

export default PageNotFound;
