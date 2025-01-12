import '../HeroSection/Hero.css'
import React from "react";
import HeroIcon from '../../assets/hero/Screenshot_20241218_182239_Facebook.png'


function Hero() {
  return (
    <section className='container'>
      <div className='content'>
        <h1 className='head'>Hey! I am Tebatso Blessing Mogashoa</h1>
        <p className='desc'>
          I'm a full-stack developer with the experience of Nodejs, React,
          Firebase, MongoDB and React Native. Reach out to me if you'd Like to
          learn more!
        </p>
        <a href="contact" className='contactBtn'>Contact Me</a>
      </div>
      <img className='hero-img' src= {HeroIcon} alt="My Image"/>
      <div className="topBlur"/>
      <div className="bottomBlur"/>
    </section>
  );
}

export default Hero;
