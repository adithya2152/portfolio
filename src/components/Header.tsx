import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav: React.FC = () => {

  const[menuOpen , setMenuOpen] = useState(false)


  return (
    <nav>
      <h2><Link to="/">ADITHYA BHARADWAJ C</Link></h2>
      <div className="menu" onClick={()=>{ setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav_container">
      <ul className={menuOpen ? "open" : ""}>
          <li className="nav-item" onClick={()=>setMenuOpen(false)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item" onClick={()=>setMenuOpen(false)}>
            <NavLink to ="/projects">Projects</NavLink>
          </li>
          <li className="nav-item" onClick={()=>setMenuOpen(false)}>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="nav-item" onClick={()=>setMenuOpen(false)}>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li className="nav-item" onClick={()=>setMenuOpen(false)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


