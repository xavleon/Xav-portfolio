import React from "react";
import "./Skills.css";

const SkillCard = ({ title, level }) => {
  return (
    <div className="skill">
      <p>{title}</p>
      <div className="bar">
        <div className="progress" style={{ width: level }}></div>
      </div>
    </div>
  );
};

export default SkillCard;
