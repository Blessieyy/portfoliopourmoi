import "../About/About.css";
import React from "react";
import AboutMe from "../../assets/about/mike.png";
import Cursor from "../../assets/about/cursorIcon.png";
import Server from "../../assets/about/serverIcon.png";
import UI from "../../assets/about/uiIcon.png";

function About() {
  return (
    <section className="about-container" id="about">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <img
          className="aboutImage"
          src={AboutMe}
          alt="Sitting with the laptop"
        />

        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={Cursor} alt="CursorIcon" />
            <div className="aboutItemText">
              <h3 className="aboutHeader">Frontend Developer</h3>
              <p className="aboutText">
                I'm a frontend developer passionate about building responsive,
                high-performance websites with seamless user experiences. I
                specialize in modern web technologies like React, ensuring
                clean, optimized, and accessible designs. From crafting
                intuitive UIs to optimizing performance, I focus on creating
                fast, engaging, and user-friendly web applications. I love
                solving challenges and bringing ideas to life with efficient,
                maintainable code.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={Server} alt="ServerIcon" />
            <div className="aboutItemText">
              <h3 className="aboutHeader">Backend Developer</h3>
              <p className="aboutText">
                I have experience in developing fast and optimised Backend
                systems and APIs
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={UI} alt="UIIcon" />
            <div className="aboutItemText">
              <h3 className="aboutHeader">UI Designer</h3>
              <p className="aboutText">
                I have designed multiple landing pages and designed systems as
                well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
