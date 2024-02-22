import React from "react";
import './Project.css'
import projects from "./data";
import ProjectCard from "./ProjectCard";

const Projects = ()=>{



    return <div className="projects">
                <h1>Big Projects</h1>
                <p>SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH
</p>


        <div className="cards">
           {projects.map((project)=>{
                return <ProjectCard 
                        project = {project}
                />
           })}

        </div>
    </div>
}


export default Projects