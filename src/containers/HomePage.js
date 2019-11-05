import React from "react";
import "../common/homePage.css";
import "../common/normalize.css";
import NavBars from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBars />
      <div className="container-fluid homePage"></div>
    </>
  );
};

export default HomePage;
