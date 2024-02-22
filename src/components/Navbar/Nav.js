import React from "react";
import "./Nav.css";
import logo from "../../assets/react.svg";

const Nav = () => {
  return (
    <nav>
      <h1>&lt; Javier /&gt;</h1>
      {/*  <img src={logo} alt="Logo" />*/}
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
