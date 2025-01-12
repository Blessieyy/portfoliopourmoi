import "../Navbar/Navbar.css"
import React, { useState } from "react";
import menuIcon from '../../assets/nav/menuIcon.png'
import closeIcon from '../../assets/nav/closeIcon.png'

function Navbar() {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
    <nav className="navbar">
      <a className="title" href="/">
        Pour Moi
      </a>
      <div className="menu">
      <img className="menuBtn" src={menuOpen ? closeIcon : menuIcon} alt="Menu Icon" onClick={()=> setMenuOpen(!menuOpen)} />
      <ul className={`menuItems ${menuOpen ? "open" : ""}`} onClick={()=>setMenuOpen(false)}>

          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
