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

// PerformanceDisplay component for each skill
const PerformanceDisplay = ({ performance, setPerformance }) => {
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setPerformance(value);
    }
  };

  return (
    <div className="performance-container">
      <input
        type="number"
        min="0"
        max="100"
        value={performance}
        onChange={handleInputChange}
        placeholder="Enter performance (0-100)"
      />
      <div className="performance-bar">
        <div
          className="performance-fill"
          style={{ width: `${performance}%` }}
        ></div>
      </div>
      <p>{performance}%</p>
    </div>
  );
};

function Exp() {
  // Load initial performance data from localStorage or set default values
  const loadInitialPerformance = () => {
    const savedPerformances = JSON.parse(localStorage.getItem('skillPerformances'));
    if (savedPerformances) {
      return savedPerformances;
    } else {
      // Initialize performance with 0 for each skill if no data is found
      return skills.reduce((acc, skill) => {
        acc[skill.title] = 0;
        return acc;
      }, {});
    }
  };

  const [skillPerformances, setSkillPerformances] = useState(loadInitialPerformance);

  const handlePerformanceChange = (title, value) => {
    setSkillPerformances((prev) => {
      const updatedPerformances = { ...prev, [title]: value };
      // Save updated performance to localStorage
      localStorage.setItem('skillPerformances', JSON.stringify(updatedPerformances));
      return updatedPerformances;
    });
  };

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
                {/* Add PerformanceDisplay for each skill */}
                <PerformanceDisplay
                  performance={skillPerformances[skill.title]}
                  setPerformance={(value) =>
                    handlePerformanceChange(skill.title, value)
                  }
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
