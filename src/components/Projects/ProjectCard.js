import React from "react";
import './Project.css'

import { useNavigate } from "react-router-dom";

const ProjectCard = ({project})=>{

    const navigate = useNavigate()



    const handleVisitSite = ()=>{
        console.log('Button Clicked');
        navigate(project.link)
    }


    return (
            <div className="card">
            <img src={project.img} alt="Project Picture" />
               <h2>{project.title}</h2>
                <p>
              {project.desc}
                </p>
                <button  onClick={handleVisitSite}   >Visit Website</button>
            </div>
           
    )
}


export default ProjectCard