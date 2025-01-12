import '../Experience/Exp.css'
import React from "react";
import skills from "../../data/skils.json";
import history from "../../data/history.json";

import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";
import mongoImg from "../../assets/skills/mongodb.png";
import nodeImg from "../../assets/skills/node.png";
import figmaImg from "../../assets/skills/figma.png";
import firebaseImg from "../../assets/skills/firebase.png";

import googleImg from "../../assets/history/google.png";
import microsoftImg from "../../assets/history/microsoft.png";
import netflixImg from "../../assets/history/netflix.png";

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
  google: googleImg,
  microsoft: microsoftImg,
  netflix: netflixImg,
};

function Exp() {
  return (
    <section className='exp-container'id="experience">
      <h2 className='exp-tile'>Experience</h2>
      <div className='exp-content'>
        <div className='skills'>
          {skills.map((skill, id) => {
            return (
              <div className='skill' key={id}>
                <div className='skillImageContainer' >
                  <img src={images[skill.title]} alt={skill.title} />
                </div>
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
        <ul className='history'>{history.map((historyItem, id) => {
            return(
                <li className='historyItem' key={id}>
                        <img src={historyImages[historyItem.img]} alt={`${historyItem.organisation}Logo`}/>
                      <div className='historyDetails'>
                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                        <ul>{historyItem.experiences.map((experience, id)=>{
                            return <li key={id}>{experience}</li>
                        })}</ul>
                      </div>
                </li>
            )
        })}
            
        </ul>
      </div>
    </section>
  );
}

export default Exp;
