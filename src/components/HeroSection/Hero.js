import "../HeroSection/Hero.css";
import React from "react";
import HeroIcon from "../../assets/hero/Screenshot_20241218_182239_Facebook.png";
import resume from "../../assets/Resume/resume_coolfreecv_ats_03 (1) (1).pdf";

function Hero() {
  return (
    <section className="container">
      <div className="content">
        <h1 className="head">Hey! I am Tebatso Blessing Mogashoa</h1>
        <h2 className="head2">Trainee at CodeTribe Tembisa</h2>
        <p className="desc">
          I'm a full-stack developer skilled in Node.js, React, Firebase,
          MongoDB, and React Native. I build scalable applications with a focus
          on performance and user experience. Always open to collaboration—feel
          free to reach out!
        </p>
        <a href={resume} className="contactBtn" id="contact" target="_blank">
          My Resume
        </a>
      </div>
      <div className="hero-img">
        <img src={HeroIcon} alt="My Image" />
      </div>
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
}

export default Hero;
