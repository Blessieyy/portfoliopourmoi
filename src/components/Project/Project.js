import "../../components/Project/Project.css";
import React from "react";
import projects from "../../data/Project.json";
import Oprojects from "../../data/Others.json";

import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section className="project-container" id="project">
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <h2 className="project-title">Other Projects</h2>
      <div className="others">
        {Oprojects.map((others, id) => {
          return (
            <ul>
              <div className="others-content">
              <li key={id} >
               <h3 className="others-title">{others.title2}</h3> 
               </li>
               <p className="desc2">{others.description2}</p>
           
              <div className="links2">
              <a href=  {others.demo2} className="link2">Demo</a>
              <a href= {others.source2} className="link2">Source</a>
              </div>
              </div> 
            </ul>
            
          );
        })}
      </div>
    </section>
  );
}

export default Project;
