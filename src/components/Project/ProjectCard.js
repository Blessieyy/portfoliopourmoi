import "../../components/Project/ProjectCard.css";
import React from "react";

import projectImg from "../../assets/projects/project.png";
const image = {
  pro: projectImg,
};

function ProjectCard({
  project: { title, img, description, skills, demo, source },
}) {
  return (
    <div className="Card-container">
      <img src={image[img]} alt={` of ${title}`} className="Card-image" />
      <h3 className="Card-title">{title}</h3>
      <p className="Card-desc">{description}</p>
      <ul className="Card-skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="Card-skill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="Card-links">
        <a href={demo} className="Card-link">
          Demo
        </a>
        <a href={source} className="Card-link">
          Source
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
