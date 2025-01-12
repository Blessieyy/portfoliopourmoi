import '../../components/Project/Project.css'
import React from "react";
import projects from "../../data/Project.json";


import ProjectCard from "./ProjectCard";



function Project() {
  return (
    <section className="project-container" id='project'>
      <h2 className='project-title'>Projects</h2>
      <div className='projects'>
        {projects.map((project, id) => {
          return (
           <ProjectCard key={id} project={project}/>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
