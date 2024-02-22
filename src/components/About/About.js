import React from "react";
import gif from "../../assets/JXA0.gif";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="leftBox">
        <img src={gif} alt="My Picture" />
      </div>

      <div className="rightBox">
        <h1>What I Do? 💻</h1>
        <p>Passionare Full Stack Developer with 5+ years of experience.</p>
        <ul>
          <li>
            <span>👨‍💻</span> ⚡ Develop highly interactive Front end / User
            Interfaces for your web and mobile applications
          </li>
          <li>
            <span>👨‍💻</span> ⚡ Develop highly interactive Front end / User
            Interfaces for your web and mobile applications
          </li>

          <li>
            <span>👨‍💻</span> ⚡ Develop highly interactive Front end / User
            Interfaces for your web and mobile applications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
