import React from "react";
import gifImg from "../../assets/JXA0.gif";
import skills from "./data";

import "./Skills.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="leftBox">
        <h1>Proficiency</h1>

        {skills.map((element) => {
          return (
            <SkillCard
              title={element.title.toUpperCase()}
              level={element.level}
            />
          );
        })}
      </div>
      <div className="rightBox">
        <img src={gifImg} alt="SKills Picture" />
      </div>
    </div>
  );
};

export default Skills;
