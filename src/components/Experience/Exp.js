import '../Experience/Exp.css';
import React, { useState, useEffect } from "react";
import skills from "../../data/skils.json"; 
import history from "../../data/history.json";

import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";
import mongoImg from "../../assets/skills/mongodb.png";
import nodeImg from "../../assets/skills/node.png";
import figmaImg from "../../assets/skills/figma.png";
import firebaseImg from "../../assets/skills/firebase.png";

import mlabImg from "../../assets/history/mlab.png";
import microsoftImg from "../../assets/history/microsoft.png";
import gijimaImg from "../../assets/history/gijima.png";

const images = {
  HTML: htmlImg,
  CSS: cssImg,
  react: reactImg,
  mongo: mongoImg,
  node: nodeImg,
  fig: figmaImg,
  fire: firebaseImg,
};

const historyImages = {
  mlab: mlabImg,
  microsoft: microsoftImg,
  gijima: gijimaImg,
};


const getLevelColor = (level) => {
  switch(level) {
    case 'Beginner':
      return 'lightblue'; 
    case 'Intermediate':
      return 'yellow'; 
    case 'Advanced':
      return 'green'; 
    default:
      return 'gray'; 
  }
};


const PerformanceDisplay = ({ performance, level }) => {
  const levelColor = getLevelColor(level);

  return (
    <div className="performance-container">
      <div className="performance-bar">
        <div
          className="performance-fill"
          style={{ width: `${performance}%`, backgroundColor: levelColor }}
        ></div>
      </div>
      <p>{performance}%</p>
      <p className="level">{level}</p> 
    </div>
  );
};

function Exp() {


  return (
    <section className='exp-container' id="experience">
      <h2 className='exp-tile'>Experience</h2>
      <div className='exp-content'>
        <div className='skills'>
          {skills.map((skill, id) => {
            return (
              <div className='skill' key={id}>
                <div className='skillImageContainer'>
                  <img src={images[skill.title]} alt={skill.title} />
                </div>
                <p>{skill.name}</p>
             
                <PerformanceDisplay 
                  performance={skill.performance} 
                  level={skill.level} 
                />
              </div>
            );
          })}
        </div>
        <ul className='history'>
          {history.map((historyItem, id) => {
            return (
              <li className='historyItem' key={id}>
                <img src={historyImages[historyItem.img]} alt={`${historyItem.organisation}Logo`} />
                <div className='historyDetails'>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Exp;
